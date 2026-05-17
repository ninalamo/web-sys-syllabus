import { lazy } from 'react'

export const CHAPTERS = [
  {
    id: 'e2',
    title: 'Elective 2: Building Web Products',
    items: [
      { title: 'Syllabus',                               component: lazy(() => import('./content/Elective2BuildingWebProducts')) },
      { title: 'Week 1: C# Translation Bootcamp',        component: lazy(() => import('./content/CsharpTranslationBootcamp')) },
      { title: 'Week 2: Interfaces & DI Mental Model',   component: lazy(() => import('./content/InterfacesAndDiMentalModel')) },
      { title: 'Week 3: HTTP & The Web',                 component: lazy(() => import('./content/HttpAndTheWeb')) },
      { title: 'Week 4: MVC Big Picture',                component: lazy(() => import('./content/MvcBigPicture')) },
      { title: 'Week 5: Routing Deep-Dive',              component: lazy(() => import('./content/RoutingDeepDive')) },
      { title: 'Week 6: Controllers & Action Results',   component: lazy(() => import('./content/ControllersAndActionResults')) },
      { title: 'Week 7: Views & Layouts',                component: lazy(() => import('./content/ViewsAndLayouts')) },
      { title: 'Week 8: Model Binding & Validation',     component: lazy(() => import('./content/ModelBindingAndValidation')) },
      { title: 'Week 9: EF Core Fundamentals',           component: lazy(() => import('./content/EfCoreFundamentals')) },
      { title: 'Week 10: Relationships & Data Display',  component: lazy(() => import('./content/RelationshipsAndDataDisplay')) },
      { title: 'Week 11: Consuming APIs with HttpClient',component: lazy(() => import('./content/ConsumingApisWithHttpclient')) },
      { title: 'Week 12: Mini-Capstone Checkpoint',      component: lazy(() => import('./content/MiniCapstoneCheckpoint')) },
      { title: 'Week 13: Authentication & Authorization',component: lazy(() => import('./content/AuthenticationAndAuthorization')) },
      { title: 'Week 14: Security Fundamentals',         component: lazy(() => import('./content/SecurityFundamentals')) },
      { title: 'Week 15: Capstone Sprint',               component: lazy(() => import('./content/CapstoneSprint')) },
      { title: 'Week 16: Capstone Final',                component: lazy(() => import('./content/CapstoneFinalDeployAndPresent')) },
      { title: 'Full Discussions',                       component: lazy(() => import('./content/Elective2Discussions')) },
    ],
  },
  {
    id: 'e3',
    title: 'Elective 3: Production-Grade Products',
    items: [
      { title: 'Syllabus',                               component: lazy(() => import('./content/Elective3ProductionGradeProducts')) },
      { title: 'Week 1: Modern JavaScript Review',       component: lazy(() => import('./content/ModernJavascriptReview')) },
      { title: 'Week 2: Async JavaScript Deep-Dive',     component: lazy(() => import('./content/AsyncJavascriptDeepDive')) },
      { title: 'Week 3: TypeScript Essentials',          component: lazy(() => import('./content/TypescriptEssentials')) },
      { title: 'Week 4: Dev Tooling & Workflow',         component: lazy(() => import('./content/DevToolingAndWorkflow')) },
      { title: 'Week 5: Component Thinking in Vanilla JS', component: lazy(() => import('./content/ComponentThinkingInVanillaJs')) },
      { title: 'Week 6: React Fundamentals',             component: lazy(() => import('./content/ReactFundamentals')) },
      { title: 'Week 7: Effects & Data Fetching',        component: lazy(() => import('./content/EffectsAndDataFetching')) },
      { title: 'Week 8: React Router & SPA Concepts',   component: lazy(() => import('./content/ReactRouterAndSpaConcepts')) },
      { title: 'Week 9: API Design Philosophy',          component: lazy(() => import('./content/ApiDesignPhilosophy')) },
      { title: 'Week 10: ASP.NET Core Web API',          component: lazy(() => import('./content/AspnetCoreWebApi')) },
      { title: 'Week 11: Frontend-Backend Integration',  component: lazy(() => import('./content/FrontendBackendIntegration')) },
      { title: 'Week 12: API Versioning & Documentation',component: lazy(() => import('./content/ApiVersioningAndDocumentation')) },
      { title: 'Week 13: Auth Deep-Dive',                component: lazy(() => import('./content/AuthDeepDive')) },
      { title: 'Week 14: Testing',                       component: lazy(() => import('./content/Testing')) },
      { title: 'Week 15: CI/CD & Deployment',            component: lazy(() => import('./content/CiCdAndDeployment')) },
      { title: 'Week 16: Capstone Final',                component: lazy(() => import('./content/CapstoneFinal')) },
      { title: 'Full Discussions',                       component: lazy(() => import('./content/Elective3Discussions')) },
    ],
  },
  {
    id: 'appendix',
    title: 'Appendices',
    items: [
      { title: 'Teaching Script Format',                 component: lazy(() => import('./content/TeachingScriptFormat')) },
    ],
  },
]

export const ALL_ITEMS = CHAPTERS.flatMap((s) => s.items)
