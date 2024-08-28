Assignment Overview:
You are required to build a simple blog application using Next.js. The application will include features like nested routing, dynamic routes for blog posts, and a clear distinction between client and server components. You'll also create custom loading and error pages.

Tasks:

Project Setup:
Create a new Next.js project using npx create-next-app.
Set up a basic folder structure with the following pages:

- Home page (/)
- About page (/about)
- Blog page (/blog)

Routing:

- Implement routing for the home page and about page.
- Create a navigation bar that includes links to Home, About, and Blog pages.

Nested Routing:

- Inside the blog directory, create a nested route to display a list of blog categories.
- Example: /blog/category/[categoryName]
- Each category page should display a list of blog posts under that category.

Dynamic Routing:

- Create dynamic routes for individual blog posts.
- Example: /blog/[categoryName]/[postId]
- Implement a function that fetches post data based on the postId parameter.
- Display the blog post content on its respective page.

Loading and Error Pages:

- Implement a custom loading page that appears while data is being fetched for blog posts.
- Create a custom error page to handle cases where a post is not found or when there's an error fetching data.
  Components:
- add Navbar.
- add sidenav.