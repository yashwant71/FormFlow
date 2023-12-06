

# Features: 
- Create forms with a stunning drag and drop designer !
- Layout fields: Title, SubTitle, Spacer, Separator, Paragraph
- Form fields: Text, Number, Select, Date, Checkbox, Textarea
- Is easy to add and customize new fields 
- Form preview dialog
- Share form url
- Form submission/validation
- Form stats: visits and submissions
- Responsive

# technology stack we used:
- Nextjs 13  with AppRouter
- shadcn.ui : Built with Radix UI and Tailwind CSS, Shadcn UI is all about accessibility, customizability, and an enhanced developer experience.
    - radix ui : for ui components 
    - tailwind CSS : using css via custom classes library
- prisma : Prisma is a server-side library that helps developers read and write data to the database in an intuitive, efficient and safe way.
- postgresSQL : sql type database (we are using vercel storage in our case)
- clerk : Clerk makes it simple to add authentication to your Next.js application.
- dnd kit : for drag and drop functionality
- zod : we are using it for creating schemas
- ServerActions
- Typescript

misc tech:
- next-themes : for dark mode


# misc links for libary docs:
- https://ui.shadcn.com/themes
- https://clerk.com/docs/quickstarts/nextjs#require-authentication-to-access-your-app
- https://heropatterns.com/
- https://react.dev/reference/react

# misc commands:
- npx prisma migrate dev // to setup using vercel storage service via .env it started init_db ,whenever we change schema.prisma ,need to migrate it too
- npx prisma studio // TO RUN DB viewer
- 
# todo:

fix issue :
- when we drag the designer/drop_zone element and drop below the same , the hover div is not getting hidden , also its not moving it to bottom also


- maybe todo:
- add functionality to copy element in designer
- custom form elements 
- publish auto saves

