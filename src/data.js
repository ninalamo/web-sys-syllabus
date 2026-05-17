import { lazy } from 'react'

export const CHAPTERS = [
  {
    id: 'e2',
    title: 'Elective 2: Building Web Products',
    items: [
      {
        title: 'Syllabus',
        file: '/elective-2-building-web-products.htm',
        component: lazy(() => import('./content/Elective2BuildingWebProducts'))
      },
      {
        title: 'Week 1: C# Translation Bootcamp',
        file: '/elective-2/week-01-csharp-translation-bootcamp.htm',
        component: lazy(() => import('./content/CsharpTranslationBootcamp')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'C# Syntax Reference',
                file: '/elective-2/week-01/resources/csharp-syntax-reference.htm',
                component: lazy(() => import('./content/E2W1ResoCsharpSyntaxReference'))
              },
              {
                title: 'Learning Checklist (Self-Assessment)',
                file: '/elective-2/week-01/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W1ResoLearningChecklist'))
              },
              {
                title: 'Quick-Reference Card',
                file: '/elective-2/week-01/resources/quick-reference-card.htm',
                component: lazy(() => import('./content/E2W1ResoQuickReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 1 — Presentation Notes',
                file: '/elective-2/week-01/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W1PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Calculator Solution',
                file: '/elective-2/week-01/exercises/calculator-solution.cs',
                component: lazy(() => import('./content/E2W1ExerCalculatorSolution'))
              },
              {
                title: 'Calculator Starter',
                file: '/elective-2/week-01/exercises/calculator-starter.cs',
                component: lazy(() => import('./content/E2W1ExerCalculatorStarter'))
              },
              {
                title: 'Fizzbuzz Solution',
                file: '/elective-2/week-01/exercises/fizzbuzz-solution.cs',
                component: lazy(() => import('./content/E2W1ExerFizzbuzzSolution'))
              },
              {
                title: 'Fizzbuzz Starter',
                file: '/elective-2/week-01/exercises/fizzbuzz-starter.cs',
                component: lazy(() => import('./content/E2W1ExerFizzbuzzStarter'))
              },
              {
                title: 'Week 1 — In-Class Exercise: Three Small Programs',
                file: '/elective-2/week-01/exercises/in-class-exercise-prompt.htm',
                component: lazy(() => import('./content/E2W1ExerInClassExercisePrompt'))
              },
              {
                title: 'Student Manager Solution',
                file: '/elective-2/week-01/exercises/student-manager-solution.cs',
                component: lazy(() => import('./content/E2W1ExerStudentManagerSolution'))
              },
              {
                title: 'Student Manager Starter',
                file: '/elective-2/week-01/exercises/student-manager-starter.cs',
                component: lazy(() => import('./content/E2W1ExerStudentManagerStarter'))
              },
              {
                title: 'Take-Home Mission: "The Translation Engine"',
                file: '/elective-2/week-01/exercises/translation-engine-homework.htm',
                component: lazy(() => import('./content/E2W1ExerTranslationEngineHomework'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 2: Interfaces & DI Mental Model',
        file: '/elective-2/week-02-interfaces-and-di-mental-model.htm',
        component: lazy(() => import('./content/InterfacesAndDiMentalModel')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Interfaces & DI Reference',
                file: '/elective-2/week-02/resources/interfaces-and-di-reference.htm',
                component: lazy(() => import('./content/E2W2ResoInterfacesAndDiReference'))
              },
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-02/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W2ResoLearningChecklist'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 2 — Presentation Notes',
                file: '/elective-2/week-02/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W2PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Week 2 — In-Class Exercise: Logging System with DI',
                file: '/elective-2/week-02/exercises/in-class-exercise-prompt.htm',
                component: lazy(() => import('./content/E2W2ExerInClassExercisePrompt'))
              },
              {
                title: 'Logger System Solution',
                file: '/elective-2/week-02/exercises/logger-system-solution.cs',
                component: lazy(() => import('./content/E2W2ExerLoggerSystemSolution'))
              },
              {
                title: 'Logger System Starter',
                file: '/elective-2/week-02/exercises/logger-system-starter.cs',
                component: lazy(() => import('./content/E2W2ExerLoggerSystemStarter'))
              },
              {
                title: 'Take-Home Mission: "The Payment Gateway Swap"',
                file: '/elective-2/week-02/exercises/payment-gateway-homework.htm',
                component: lazy(() => import('./content/E2W2ExerPaymentGatewayHomework'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 3: HTTP & The Web',
        file: '/elective-2/week-03-http-and-the-web.htm',
        component: lazy(() => import('./content/HttpAndTheWeb')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'HTTP & The Web Reference',
                file: '/elective-2/week-03/resources/http-reference.htm',
                component: lazy(() => import('./content/E2W3ResoHttpReference'))
              },
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-03/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W3ResoLearningChecklist'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 3 — Presentation Notes',
                file: '/elective-2/week-03/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W3PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Week 3 — In-Class Exercise: DevTools Detective',
                file: '/elective-2/week-03/exercises/devtools-detective-prompt.htm',
                component: lazy(() => import('./content/E2W3ExerDevtoolsDetectivePrompt'))
              },
              {
                title: 'Http Client Starter',
                file: '/elective-2/week-03/exercises/http-client-starter.cs',
                component: lazy(() => import('./content/E2W3ExerHttpClientStarter'))
              },
              {
                title: 'Take-Home Mission: "The Postman Challenge"',
                file: '/elective-2/week-03/exercises/postman-challenge-homework.htm',
                component: lazy(() => import('./content/E2W3ExerPostmanChallengeHomework'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 4: MVC Big Picture',
        file: '/elective-2/week-04-mvc-big-picture.htm',
        component: lazy(() => import('./content/MvcBigPicture')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-04/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W4ResoLearningChecklist'))
              },
              {
                title: 'MVC Big Picture Reference',
                file: '/elective-2/week-04/resources/mvc-reference.htm',
                component: lazy(() => import('./content/E2W4ResoMvcReference'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 4 — Presentation Notes',
                file: '/elective-2/week-04/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W4PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Week 4 — In-Class Exercise: Movies MVC App',
                file: '/elective-2/week-04/exercises/in-class-exercise-prompt.htm',
                component: lazy(() => import('./content/E2W4ExerInClassExercisePrompt'))
              },
              {
                title: 'Movies Controller Starter',
                file: '/elective-2/week-04/exercises/movies-controller-starter.cs',
                component: lazy(() => import('./content/E2W4ExerMoviesControllerStarter'))
              },
              {
                title: 'Take-Home Mission: "The Portfolio Skeleton"',
                file: '/elective-2/week-04/exercises/portfolio-skeleton-homework.htm',
                component: lazy(() => import('./content/E2W4ExerPortfolioSkeletonHomework'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 5: Routing Deep Dive',
        file: '/elective-2/week-05-routing-deep-dive.htm',
        component: lazy(() => import('./content/RoutingDeepDive')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-05/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W5ResoLearningChecklist'))
              },
              {
                title: 'Routing Deep Dive Reference',
                file: '/elective-2/week-05/resources/routing-reference.htm',
                component: lazy(() => import('./content/E2W5ResoRoutingReference'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 5 — Presentation Notes',
                file: '/elective-2/week-05/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W5PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Blog Controller Solution',
                file: '/elective-2/week-05/exercises/blog-controller-solution.cs',
                component: lazy(() => import('./content/E2W5ExerBlogControllerSolution'))
              },
              {
                title: 'Blog Controller Starter',
                file: '/elective-2/week-05/exercises/blog-controller-starter.cs',
                component: lazy(() => import('./content/E2W5ExerBlogControllerStarter'))
              },
              {
                title: 'Week 5 — In-Class Exercise: Blog Routing',
                file: '/elective-2/week-05/exercises/in-class-exercise-prompt.htm',
                component: lazy(() => import('./content/E2W5ExerInClassExercisePrompt'))
              },
              {
                title: 'Take-Home Mission: "The SEO Overhaul"',
                file: '/elective-2/week-05/exercises/seo-overhaul-homework.htm',
                component: lazy(() => import('./content/E2W5ExerSeoOverhaulHomework'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 6: Controllers & Action Results',
        file: '/elective-2/week-06-controllers-and-action-results.htm',
        component: lazy(() => import('./content/ControllersAndActionResults')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Controllers & Action Results Reference',
                file: '/elective-2/week-06/resources/action-results-reference.htm',
                component: lazy(() => import('./content/E2W6ResoActionResultsReference'))
              },
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-06/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W6ResoLearningChecklist'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 6 — Presentation Notes',
                file: '/elective-2/week-06/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W6PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Week 6 — In-Class Exercise: SearchController',
                file: '/elective-2/week-06/exercises/in-class-exercise-prompt.htm',
                component: lazy(() => import('./content/E2W6ExerInClassExercisePrompt'))
              },
              {
                title: 'Take-Home Mission: "The Safe Form Submission"',
                file: '/elective-2/week-06/exercises/safe-form-homework.htm',
                component: lazy(() => import('./content/E2W6ExerSafeFormHomework'))
              },
              {
                title: 'Search Controller Solution',
                file: '/elective-2/week-06/exercises/search-controller-solution.cs',
                component: lazy(() => import('./content/E2W6ExerSearchControllerSolution'))
              },
              {
                title: 'Search Controller Starter',
                file: '/elective-2/week-06/exercises/search-controller-starter.cs',
                component: lazy(() => import('./content/E2W6ExerSearchControllerStarter'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 7: Views & Layouts',
        file: '/elective-2/week-07-views-and-layouts.htm',
        component: lazy(() => import('./content/ViewsAndLayouts')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-07/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W7ResoLearningChecklist'))
              },
              {
                title: 'Views & Layouts Reference',
                file: '/elective-2/week-07/resources/views-and-layouts-reference.htm',
                component: lazy(() => import('./content/E2W7ResoViewsAndLayoutsReference'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 7 — Presentation Notes',
                file: '/elective-2/week-07/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W7PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Week 7 — In-Class Exercise: Storefront',
                file: '/elective-2/week-07/exercises/in-class-exercise-prompt.htm',
                component: lazy(() => import('./content/E2W7ExerInClassExercisePrompt'))
              },
              {
                title: 'Product Tile Partial',
                file: '/elective-2/week-07/exercises/product-tile-partial.cshtml',
                component: lazy(() => import('./content/E2W7ExerProductTilePartial'))
              },
              {
                title: 'Take-Home Mission: "The Theme Switcher"',
                file: '/elective-2/week-07/exercises/theme-switcher-homework.htm',
                component: lazy(() => import('./content/E2W7ExerThemeSwitcherHomework'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 8: Model Binding & Validation',
        file: '/elective-2/week-08-model-binding-and-validation.htm',
        component: lazy(() => import('./content/ModelBindingAndValidation')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-08/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W8ResoLearningChecklist'))
              },
              {
                title: 'Model Binding & Validation Reference',
                file: '/elective-2/week-08/resources/model-binding-reference.htm',
                component: lazy(() => import('./content/E2W8ResoModelBindingReference'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 8 — Presentation Notes',
                file: '/elective-2/week-08/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W8PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Contact Controller Solution',
                file: '/elective-2/week-08/exercises/contact-controller-solution.cs',
                component: lazy(() => import('./content/E2W8ExerContactControllerSolution'))
              },
              {
                title: 'Contact Message Model Solution',
                file: '/elective-2/week-08/exercises/contact-message-model-solution.cs',
                component: lazy(() => import('./content/E2W8ExerContactMessageModelSolution'))
              },
              {
                title: 'Contact Message Model Starter',
                file: '/elective-2/week-08/exercises/contact-message-model-starter.cs',
                component: lazy(() => import('./content/E2W8ExerContactMessageModelStarter'))
              },
              {
                title: 'Week 8 — In-Class Exercise: Contact Us Form',
                file: '/elective-2/week-08/exercises/in-class-exercise-prompt.htm',
                component: lazy(() => import('./content/E2W8ExerInClassExercisePrompt'))
              },
              {
                title: 'Take-Home Mission: "The Strict Sign-Up"',
                file: '/elective-2/week-08/exercises/strict-signup-homework.htm',
                component: lazy(() => import('./content/E2W8ExerStrictSignupHomework'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 9: EF Core Fundamentals',
        file: '/elective-2/week-09-ef-core-fundamentals.htm',
        component: lazy(() => import('./content/EfCoreFundamentals')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'EF Core Fundamentals Reference',
                file: '/elective-2/week-09/resources/ef-core-reference.htm',
                component: lazy(() => import('./content/E2W9ResoEfCoreReference'))
              },
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-09/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W9ResoLearningChecklist'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 9 — Presentation Notes',
                file: '/elective-2/week-09/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W9PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Take-Home Mission: "The Database Registration"',
                file: '/elective-2/week-09/exercises/database-registration-homework.htm',
                component: lazy(() => import('./content/E2W9ExerDatabaseRegistrationHomework'))
              },
              {
                title: 'Ef Core Books Solution',
                file: '/elective-2/week-09/exercises/ef-core-books-solution.cs',
                component: lazy(() => import('./content/E2W9ExerEfCoreBooksSolution'))
              },
              {
                title: 'Week 9 — In-Class Exercise: EF Core InMemory',
                file: '/elective-2/week-09/exercises/in-class-exercise-prompt.htm',
                component: lazy(() => import('./content/E2W9ExerInClassExercisePrompt'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 10: Relationships & Data Display',
        file: '/elective-2/week-10-relationships-and-data-display.htm',
        component: lazy(() => import('./content/RelationshipsAndDataDisplay')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-10/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W10ResoLearningChecklist'))
              },
              {
                title: 'Relationships & Data Display Reference',
                file: '/elective-2/week-10/resources/relationships-reference.htm',
                component: lazy(() => import('./content/E2W10ResoRelationshipsReference'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 10 — Presentation Notes',
                file: '/elective-2/week-10/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W10PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Take-Home Mission: "The E-Commerce Dashboard"',
                file: '/elective-2/week-10/exercises/ecommerce-dashboard-homework.htm',
                component: lazy(() => import('./content/E2W10ExerEcommerceDashboardHomework'))
              },
              {
                title: 'Week 10 — In-Class Exercise: School System',
                file: '/elective-2/week-10/exercises/in-class-exercise-prompt.htm',
                component: lazy(() => import('./content/E2W10ExerInClassExercisePrompt'))
              },
              {
                title: 'School System Solution',
                file: '/elective-2/week-10/exercises/school-system-solution.cs',
                component: lazy(() => import('./content/E2W10ExerSchoolSystemSolution'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 11: Consuming APIs with HttpClient',
        file: '/elective-2/week-11-consuming-apis-with-httpclient.htm',
        component: lazy(() => import('./content/ConsumingApisWithHttpclient')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Consuming APIs Reference',
                file: '/elective-2/week-11/resources/consuming-apis-reference.htm',
                component: lazy(() => import('./content/E2W11ResoConsumingApisReference'))
              },
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-11/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W11ResoLearningChecklist'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 11 — Presentation Notes',
                file: '/elective-2/week-11/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W11PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Take-Home Mission: "The GitHub Profiler"',
                file: '/elective-2/week-11/exercises/github-profiler-homework.htm',
                component: lazy(() => import('./content/E2W11ExerGithubProfilerHomework'))
              },
              {
                title: 'Week 11 — In-Class Exercise: Pokemon Viewer',
                file: '/elective-2/week-11/exercises/in-class-exercise-prompt.htm',
                component: lazy(() => import('./content/E2W11ExerInClassExercisePrompt'))
              },
              {
                title: 'Pokemon Viewer Solution',
                file: '/elective-2/week-11/exercises/pokemon-viewer-solution.cs',
                component: lazy(() => import('./content/E2W11ExerPokemonViewerSolution'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 12: Mini Capstone Checkpoint',
        file: '/elective-2/week-12-mini-capstone-checkpoint.htm',
        component: lazy(() => import('./content/MiniCapstoneCheckpoint')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Mini Capstone Checkpoint Reference',
                file: '/elective-2/week-12/resources/capstone-checkpoint-reference.htm',
                component: lazy(() => import('./content/E2W12ResoCapstoneCheckpointReference'))
              },
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-12/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W12ResoLearningChecklist'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 12 — Presentation Notes',
                file: '/elective-2/week-12/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W12PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Week 12 — In-Class Exercise: Peer Code Review',
                file: '/elective-2/week-12/exercises/in-class-exercise-prompt.htm',
                component: lazy(() => import('./content/E2W12ExerInClassExercisePrompt'))
              },
              {
                title: 'Take-Home Mission: "The Mini-Capstone MVP"',
                file: '/elective-2/week-12/exercises/mini-capstone-homework.htm',
                component: lazy(() => import('./content/E2W12ExerMiniCapstoneHomework'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 13: Authentication & Authorization',
        file: '/elective-2/week-13-authentication-and-authorization.htm',
        component: lazy(() => import('./content/AuthenticationAndAuthorization')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Week 13 — Identity Setup Commands',
                file: '/elective-2/week-13/resources/identity-reference.htm',
                component: lazy(() => import('./content/E2W13ResoIdentityReference'))
              },
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-13/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W13ResoLearningChecklist'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 13 — Presentation Notes',
                file: '/elective-2/week-13/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W13PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Week 13 — In-Class Exercise: App with Login Gate',
                file: '/elective-2/week-13/exercises/in-class-exercise-prompt.htm',
                component: lazy(() => import('./content/E2W13ExerInClassExercisePrompt'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 14: Security Fundamentals',
        file: '/elective-2/week-14-security-fundamentals.htm',
        component: lazy(() => import('./content/SecurityFundamentals')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-14/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W14ResoLearningChecklist'))
              },
              {
                title: 'Security Fundamentals Reference',
                file: '/elective-2/week-14/resources/security-reference.htm',
                component: lazy(() => import('./content/E2W14ResoSecurityReference'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 14 — Presentation Notes',
                file: '/elective-2/week-14/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W14PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Week 14 — In-Class Exercise: Security Audit Report',
                file: '/elective-2/week-14/exercises/in-class-exercise-prompt.htm',
                component: lazy(() => import('./content/E2W14ExerInClassExercisePrompt'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 15: Capstone Sprint',
        file: '/elective-2/week-15-capstone-sprint.htm',
        component: lazy(() => import('./content/CapstoneSprint')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Capstone Sprint Reference',
                file: '/elective-2/week-15/resources/capstone-sprint-reference.htm',
                component: lazy(() => import('./content/E2W15ResoCapstoneSprintReference'))
              },
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-15/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W15ResoLearningChecklist'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 15 — Presentation Notes',
                file: '/elective-2/week-15/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W15PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Week 15 — Capstone Sprint',
                file: '/elective-2/week-15/exercises/capstone-sprint-prompt.htm',
                component: lazy(() => import('./content/E2W15ExerCapstoneSprintPrompt'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 16: Capstone Final — Deploy & Present',
        file: '/elective-2/week-16-capstone-final-deploy-and-present.htm',
        component: lazy(() => import('./content/CapstoneFinalDeployAndPresent')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Deployment Reference',
                file: '/elective-2/week-16/resources/deployment-reference.htm',
                component: lazy(() => import('./content/E2W16ResoDeploymentReference'))
              },
              {
                title: 'Learning Checklist',
                file: '/elective-2/week-16/resources/learning-checklist.htm',
                component: lazy(() => import('./content/E2W16ResoLearningChecklist'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Week 16 — Presentation Notes',
                file: '/elective-2/week-16/presentations/slide-notes.htm',
                component: lazy(() => import('./content/E2W16PresSlideNotes'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Week 16 — Capstone Deploy & Present',
                file: '/elective-2/week-16/exercises/deploy-and-present-prompt.htm',
                component: lazy(() => import('./content/E2W16ExerDeployAndPresentPrompt'))
              }
            ]
          }
        ]
      },
      {
        title: 'Full Discussions',
        file: '/elective-2-discussions.htm',
        component: lazy(() => import('./content/Elective2Discussions'))
      }
    ]
  },
  {
    id: 'e3',
    title: 'Elective 3: Production-Grade Products',
    items: [
      {
        title: 'Syllabus',
        file: '/elective-3-production-grade-products.htm',
        component: lazy(() => import('./content/Elective3ProductionGradeProducts'))
      },
      {
        title: 'Week 1: Modern JavaScript Review',
        file: '/elective-3/week-01-modern-javascript-review.htm',
        component: lazy(() => import('./content/ModernJavascriptReview')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Modern JavaScript Review — Resources & Reference',
                file: '/elective-3/week-01/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W1ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-01/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W1PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Modern JavaScript Review — Exercises',
                file: '/elective-3/week-01/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W1ExerExercisePrompt'))
              },
              {
                title: 'Legacy Inventory Starter',
                file: '/elective-3/week-01/exercises/legacy-inventory-starter.js',
                component: lazy(() => import('./content/E3W1ExerLegacyInventoryStarter'))
              },
              {
                title: 'Solution Data',
                file: '/elective-3/week-01/exercises/solution-data.js',
                component: lazy(() => import('./content/E3W1ExerSolutionData'))
              },
              {
                title: 'Solution Utils',
                file: '/elective-3/week-01/exercises/solution-utils.js',
                component: lazy(() => import('./content/E3W1ExerSolutionUtils'))
              },
              {
                title: 'Take-Home Mission — "The Legacy Code Rescue"',
                file: '/elective-3/week-01/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W1ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 2: Async JavaScript Deep-Dive',
        file: '/elective-3/week-02-async-javascript-deep-dive.htm',
        component: lazy(() => import('./content/AsyncJavascriptDeepDive')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Async JavaScript Deep-Dive — Resources & Reference',
                file: '/elective-3/week-02/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W2ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-02/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W2PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Async JavaScript Deep-Dive — Exercises',
                file: '/elective-3/week-02/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W2ExerExercisePrompt'))
              },
              {
                title: 'Solution Fetcher',
                file: '/elective-3/week-02/exercises/solution-fetcher.js',
                component: lazy(() => import('./content/E3W2ExerSolutionFetcher'))
              },
              {
                title: 'Starter Fetcher',
                file: '/elective-3/week-02/exercises/starter-fetcher.js',
                component: lazy(() => import('./content/E3W2ExerStarterFetcher'))
              },
              {
                title: 'Async Fetcher Exercise',
                file: '/elective-3/week-02/exercises/starter-index.html',
                component: lazy(() => import('./content/E3W2ExerStarterIndex'))
              },
              {
                title: 'Take-Home Mission — "The Broken Pokedex"',
                file: '/elective-3/week-02/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W2ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 3: TypeScript Essentials',
        file: '/elective-3/week-03-typescript-essentials.htm',
        component: lazy(() => import('./content/TypescriptEssentials')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'TypeScript Essentials — Resources & Reference',
                file: '/elective-3/week-03/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W3ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-03/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W3PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'TypeScript Essentials — Exercises',
                file: '/elective-3/week-03/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W3ExerExercisePrompt'))
              },
              {
                title: 'Solution Catalog',
                file: '/elective-3/week-03/exercises/solution-catalog.ts',
                component: lazy(() => import('./content/E3W3ExerSolutionCatalog'))
              },
              {
                title: 'Starter Catalog',
                file: '/elective-3/week-03/exercises/starter-catalog.ts',
                component: lazy(() => import('./content/E3W3ExerStarterCatalog'))
              },
              {
                title: 'Starter Tsconfig',
                file: '/elective-3/week-03/exercises/starter-tsconfig.json',
                component: lazy(() => import('./content/E3W3ExerStarterTsconfig'))
              },
              {
                title: 'Take-Home Mission — "The Strict Mode Migration"',
                file: '/elective-3/week-03/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W3ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 4: Dev Tooling & Workflow',
        file: '/elective-3/week-04-dev-tooling-and-workflow.htm',
        component: lazy(() => import('./content/DevToolingAndWorkflow')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'NPM & Vite Quick Reference',
                file: '/elective-3/week-04/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W4ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-04/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W4PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Dev Tooling & Workflow — Exercises',
                file: '/elective-3/week-04/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W4ExerExercisePrompt'))
              },
              {
                title: 'Take-Home Mission — "The Linter\'s Revenge"',
                file: '/elective-3/week-04/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W4ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 5: Component Thinking (Vanilla JS)',
        file: '/elective-3/week-05-component-thinking-in-vanilla-js.htm',
        component: lazy(() => import('./content/ComponentThinkingInVanillaJs')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Component Thinking (Vanilla JS) — Resources & Reference',
                file: '/elective-3/week-05/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W5ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-05/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W5PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Component Thinking (Vanilla JS) — Exercises',
                file: '/elective-3/week-05/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W5ExerExercisePrompt'))
              },
              {
                title: 'Solution App',
                file: '/elective-3/week-05/exercises/solution-app.js',
                component: lazy(() => import('./content/E3W5ExerSolutionApp'))
              },
              {
                title: 'Starter App',
                file: '/elective-3/week-05/exercises/starter-app.js',
                component: lazy(() => import('./content/E3W5ExerStarterApp'))
              },
              {
                title: 'Todo List',
                file: '/elective-3/week-05/exercises/starter-index.html',
                component: lazy(() => import('./content/E3W5ExerStarterIndex'))
              },
              {
                title: 'Take-Home Mission — "The Component Factory"',
                file: '/elective-3/week-05/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W5ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 6: React Fundamentals',
        file: '/elective-3/week-06-react-fundamentals.htm',
        component: lazy(() => import('./content/ReactFundamentals')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'React Fundamentals — Resources & Reference',
                file: '/elective-3/week-06/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W6ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-06/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W6PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'React Fundamentals — Exercises',
                file: '/elective-3/week-06/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W6ExerExercisePrompt'))
              },
              {
                title: 'Solution Counter',
                file: '/elective-3/week-06/exercises/solution-counter.jsx',
                component: lazy(() => import('./content/E3W6ExerSolutionCounter'))
              },
              {
                title: 'Solution Profilecard',
                file: '/elective-3/week-06/exercises/solution-profilecard.jsx',
                component: lazy(() => import('./content/E3W6ExerSolutionProfilecard'))
              },
              {
                title: 'Take-Home Mission — "The State Toggler"',
                file: '/elective-3/week-06/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W6ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 7: Effects & Data Fetching',
        file: '/elective-3/week-07-effects-and-data-fetching.htm',
        component: lazy(() => import('./content/EffectsAndDataFetching')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Effects & Data Fetching — Resources & Reference',
                file: '/elective-3/week-07/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W7ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-07/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W7PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Effects & Data Fetching — Exercises',
                file: '/elective-3/week-07/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W7ExerExercisePrompt'))
              },
              {
                title: 'Solution Pokesearch',
                file: '/elective-3/week-07/exercises/solution-pokesearch.jsx',
                component: lazy(() => import('./content/E3W7ExerSolutionPokesearch'))
              },
              {
                title: 'Solution Window Resizer',
                file: '/elective-3/week-07/exercises/solution-window-resizer.jsx',
                component: lazy(() => import('./content/E3W7ExerSolutionWindowResizer'))
              },
              {
                title: 'Take-Home Mission — "The Window Resizer"',
                file: '/elective-3/week-07/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W7ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 8: React Router & SPA Concepts',
        file: '/elective-3/week-08-react-router-and-spa-concepts.htm',
        component: lazy(() => import('./content/ReactRouterAndSpaConcepts')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'React Router & SPA Concepts — Resources & Reference',
                file: '/elective-3/week-08/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W8ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-08/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W8PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'React Router & SPA Concepts — Exercises',
                file: '/elective-3/week-08/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W8ExerExercisePrompt'))
              },
              {
                title: 'Solution Portfolio',
                file: '/elective-3/week-08/exercises/solution-portfolio.jsx',
                component: lazy(() => import('./content/E3W8ExerSolutionPortfolio'))
              },
              {
                title: 'Take-Home Mission — "The Fake E-Commerce Site"',
                file: '/elective-3/week-08/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W8ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 9: API Design Philosophy',
        file: '/elective-3/week-09-api-design-philosophy.htm',
        component: lazy(() => import('./content/ApiDesignPhilosophy')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'API Design Philosophy — Resources & Reference',
                file: '/elective-3/week-09/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W9ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-09/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W9PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'API Design Philosophy — Exercises',
                file: '/elective-3/week-09/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W9ExerExercisePrompt'))
              },
              {
                title: 'Library API Design — Solution',
                file: '/elective-3/week-09/exercises/solution-library-api.htm',
                component: lazy(() => import('./content/E3W9ExerSolutionLibraryApi'))
              },
              {
                title: 'Take-Home Mission — "The API Architect"',
                file: '/elective-3/week-09/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W9ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 10: ASP.NET Core Web API',
        file: '/elective-3/week-10-aspnet-core-web-api.htm',
        component: lazy(() => import('./content/AspnetCoreWebApi')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'ASP.NET Core Web API — Resources & Reference',
                file: '/elective-3/week-10/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W10ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-10/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W10PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'ASP.NET Core Web API — Exercises',
                file: '/elective-3/week-10/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W10ExerExercisePrompt'))
              },
              {
                title: 'Solution Games Controller',
                file: '/elective-3/week-10/exercises/solution-games-controller.cs',
                component: lazy(() => import('./content/E3W10ExerSolutionGamesController'))
              },
              {
                title: 'Take-Home Mission — "The Secure DTO"',
                file: '/elective-3/week-10/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W10ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 11: Frontend/Backend Integration',
        file: '/elective-3/week-11-frontend-backend-integration.htm',
        component: lazy(() => import('./content/FrontendBackendIntegration')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Frontend/Backend Integration — Resources & Reference',
                file: '/elective-3/week-11/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W11ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-11/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W11PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Frontend/Backend Integration — Exercises',
                file: '/elective-3/week-11/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W11ExerExercisePrompt'))
              },
              {
                title: 'Solution Todo App',
                file: '/elective-3/week-11/exercises/solution-todo-app.jsx',
                component: lazy(() => import('./content/E3W11ExerSolutionTodoApp'))
              },
              {
                title: 'Take-Home Mission — "The Full Stack Delete"',
                file: '/elective-3/week-11/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W11ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 12: API Versioning & Documentation',
        file: '/elective-3/week-12-api-versioning-and-documentation.htm',
        component: lazy(() => import('./content/ApiVersioningAndDocumentation')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'API Versioning & Documentation — Resources & Reference',
                file: '/elective-3/week-12/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W12ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-12/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W12PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'API Versioning & Documentation — Exercises',
                file: '/elective-3/week-12/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W12ExerExercisePrompt'))
              },
              {
                title: 'Solution Users V1',
                file: '/elective-3/week-12/exercises/solution-users-v1.cs',
                component: lazy(() => import('./content/E3W12ExerSolutionUsersV1'))
              },
              {
                title: 'Solution Users V2',
                file: '/elective-3/week-12/exercises/solution-users-v2.cs',
                component: lazy(() => import('./content/E3W12ExerSolutionUsersV2'))
              },
              {
                title: 'Take-Home Mission — "The Professional Contract"',
                file: '/elective-3/week-12/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W12ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 13: Auth Deep-Dive',
        file: '/elective-3/week-13-auth-deep-dive.htm',
        component: lazy(() => import('./content/AuthDeepDive')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Auth Deep-Dive — Resources & Reference',
                file: '/elective-3/week-13/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W13ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-13/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W13PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Auth Deep-Dive — Exercises',
                file: '/elective-3/week-13/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W13ExerExercisePrompt'))
              },
              {
                title: 'Solution Auth Controller',
                file: '/elective-3/week-13/exercises/solution-auth-controller.cs',
                component: lazy(() => import('./content/E3W13ExerSolutionAuthController'))
              },
              {
                title: 'Solution Token Service',
                file: '/elective-3/week-13/exercises/solution-token-service.cs',
                component: lazy(() => import('./content/E3W13ExerSolutionTokenService'))
              },
              {
                title: 'Take-Home Mission — "The Security Audit"',
                file: '/elective-3/week-13/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W13ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 14: Testing',
        file: '/elective-3/week-14-testing.htm',
        component: lazy(() => import('./content/Testing')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Testing — Resources & Reference',
                file: '/elective-3/week-14/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W14ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-14/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W14PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Testing — Exercises',
                file: '/elective-3/week-14/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W14ExerExercisePrompt'))
              },
              {
                title: 'Solution E2e Tests',
                file: '/elective-3/week-14/exercises/solution-e2e-tests.ts',
                component: lazy(() => import('./content/E3W14ExerSolutionE2eTests'))
              },
              {
                title: 'Solution Integration Tests',
                file: '/elective-3/week-14/exercises/solution-integration-tests.cs',
                component: lazy(() => import('./content/E3W14ExerSolutionIntegrationTests'))
              },
              {
                title: 'Solution Unit Tests',
                file: '/elective-3/week-14/exercises/solution-unit-tests.cs',
                component: lazy(() => import('./content/E3W14ExerSolutionUnitTests'))
              },
              {
                title: 'Take-Home Mission — "The Test Coverage Challenge"',
                file: '/elective-3/week-14/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W14ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 15: CI/CD & Deployment',
        file: '/elective-3/week-15-ci-cd-and-deployment.htm',
        component: lazy(() => import('./content/CiCdAndDeployment')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'CI/CD & Deployment — Resources & Reference',
                file: '/elective-3/week-15/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W15ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-15/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W15PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'CI/CD & Deployment — Exercises',
                file: '/elective-3/week-15/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W15ExerExercisePrompt'))
              },
              {
                title: 'Solution Cd Yml',
                file: '/elective-3/week-15/exercises/solution-cd-yml',
                component: lazy(() => import('./content/E3W15ExerSolutionCdYml'))
              },
              {
                title: 'Solution Ci Yml',
                file: '/elective-3/week-15/exercises/solution-ci-yml',
                component: lazy(() => import('./content/E3W15ExerSolutionCiYml'))
              },
              {
                title: 'Take-Home Mission — "The Live Deploy"',
                file: '/elective-3/week-15/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W15ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Week 16: Capstone Final',
        file: '/elective-3/week-16-capstone-final.htm',
        component: lazy(() => import('./content/CapstoneFinal')),
        children: [
          {
            title: 'Resources',
            items: [
              {
                title: 'Capstone Final — Resources & Reference',
                file: '/elective-3/week-16/resources/reference-card.htm',
                component: lazy(() => import('./content/E3W16ResoReferenceCard'))
              }
            ]
          },
          {
            title: 'Presentations',
            items: [
              {
                title: 'Presentations — Placeholder',
                file: '/elective-3/week-16/presentations/PLACEHOLDER.htm',
                component: lazy(() => import('./content/E3W16PresPlaceholder'))
              }
            ]
          },
          {
            title: 'Exercises',
            items: [
              {
                title: 'Capstone Final — Exercises',
                file: '/elective-3/week-16/exercises/exercise-prompt.htm',
                component: lazy(() => import('./content/E3W16ExerExercisePrompt'))
              },
              {
                title: 'Capstone Presentation Template',
                file: '/elective-3/week-16/exercises/presentation-template.htm',
                component: lazy(() => import('./content/E3W16ExerPresentationTemplate'))
              },
              {
                title: 'Take-Home Mission — "The Portfolio Polish"',
                file: '/elective-3/week-16/exercises/take-home-mission.htm',
                component: lazy(() => import('./content/E3W16ExerTakeHomeMission'))
              }
            ]
          }
        ]
      },
      {
        title: 'Full Discussions',
        file: '/elective-3-discussions.htm',
        component: lazy(() => import('./content/Elective3Discussions'))
      }
    ]
  },
  {
    id: 'appendix',
    title: 'Appendices',
    items: [
      {
        title: 'Teaching Script Format',
        file: '/teaching-script-format.htm',
        component: lazy(() => import('./content/TeachingScriptFormat'))
      }
    ]
  }
]

function flattenItems(items) {
  const flat = []
  for (const item of items) {
    if (item.component) {
      flat.push(item)
    }
    if (item.children) {
      for (const cat of item.children) {
        flat.push(...flattenItems(cat.items))
      }
    }
  }
  return flat
}

export const ALL_ITEMS = CHAPTERS.flatMap((s) => flattenItems(s.items))
