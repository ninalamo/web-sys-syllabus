import fs from 'fs';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, BorderStyle, WidthType } from 'docx';

// Read data.js and extract the structure
const dataContent = fs.readFileSync('./src/data.js', 'utf-8');

// We will use regex to extract titles.
// A more robust way is to just look for title: '...' and structure it by indentation or block, 
// but since it's a known format, let's just parse it line by line.

let electives = [];
let currentElective = null;
let currentWeek = null;
let currentCategory = null;

const lines = dataContent.split('\n');
for (let line of lines) {
    const titleMatch = line.match(/title:\s*'([^']+)'/);
    if (titleMatch) {
        const title = titleMatch[1];
        if (title.startsWith('Elective')) {
            currentElective = { title, weeks: [] };
            electives.push(currentElective);
        } else if (title.startsWith('Week')) {
            if (line.includes('In-Class') || line.includes('Presentation Notes')) {
                // it's an item
                if (currentCategory) currentCategory.items.push(title);
            } else {
                // it's a week
                currentWeek = { title, categories: [] };
                if (currentElective) currentElective.weeks.push(currentWeek);
            }
        } else if (title === 'Resources' || title === 'Presentations' || title === 'Exercises' || title === 'Syllabus') {
            currentCategory = { title, items: [] };
            if (currentWeek) currentWeek.categories.push(currentCategory);
        } else {
            if (currentCategory) currentCategory.items.push(title);
        }
    }
}

// Now generate docx
const docSections = [];

for (const elective of electives) {
    const electiveChildren = [
        new Paragraph({
            text: elective.title,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 }
        })
    ];

    for (const week of elective.weeks) {
        electiveChildren.push(
            new Paragraph({
                text: week.title,
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 300, after: 100 }
            })
        );

        for (const cat of week.categories) {
            if (cat.title === 'Syllabus') continue;
            
            electiveChildren.push(
                new Paragraph({
                    text: cat.title,
                    heading: HeadingLevel.HEADING_3,
                    spacing: { before: 200, after: 100 }
                })
            );

            for (const item of cat.items) {
                electiveChildren.push(
                    new Paragraph({
                        children: [new TextRun({ text: "• " + item })],
                        spacing: { after: 50 }
                    })
                );
            }
        }
    }

    docSections.push({
        properties: {},
        children: electiveChildren
    });
}

const doc = new Document({
    creator: "Web Systems Course",
    title: "Web Systems Syllabus",
    description: "Course syllabus for Web Systems Electives",
    sections: docSections
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Web_Sys_Syllabus.docx", buffer);
    console.log("Document created successfully at Web_Sys_Syllabus.docx");
});
