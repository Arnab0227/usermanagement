# Next.js User Management Table

## Overview
This is a **User Management Table** application built with **Next.js**, leveraging the following technologies:

- **TanStack Table** for table functionalities (sorting, filtering, pagination).
- **TanStack Query** for data fetching and caching.
- **Shadcn** for UI components.
- **React** for building the user interface.

The app displays a list of users fetched from a mock API and supports functionalities like global filtering, column-specific filtering, server-side pagination, and sorting.

---

## Features

1. **Sorting:**
   - Allows sorting of columns like Name and Email in ascending or descending order.
   - Multi-column sorting is supported.

2. **Filtering:**
   - Global filtering for all data.
   - Column-specific filtering for fine-grained search.

3. **Pagination:**
   - Server-side pagination to handle large datasets efficiently.
   - Next/Previous buttons for navigation.

4. **Responsive UI:**
   - Fully responsive table design with accessible components.

---

## Challenges Faced

### Sorting Implementation with Pagination
During the development, combining sorting with server-side pagination posed a challenge. The issue was ensuring that sorting updates were correctly sent to the API along with the pagination parameters. Specifically:

- **Challenge:** When a user sorted a column, the current page data had to refresh while maintaining the page number and sorting order.
- **Solution:** To resolve this:
  - Updated the `queryKey` dynamically with sorting and pagination states.
  - Used the `onSortingChange` callback of TanStack Table to trigger a refetch.
  - Ensured API responses matched the requested sort order to avoid incorrect table rendering.

This added complexity but ultimately ensured a seamless user experience.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Folder Structure

```plaintext
/src
  /components
    - ui (Reusable UI components like Button, Table, etc.)
    - user-details.tsx (Details modal for individual users)
  /pages
    - index.tsx (Main application logic)
    - providers.tsx (React Query provider setup)
```

---

## API Endpoint
The application fetches user data from a mock API:

```plaintext
https://jsonplaceholder.typicode.com/users
```

Pagination parameters are appended to the URL (e.g., `_page=1&_limit=10`).

---

## Usage

1. Use the global filter input to search across all columns.
2. Filter specific columns like Name or Email using the provided inputs.
3. Sort by clicking on column headers.
4. Navigate through pages using Next and Previous buttons.
5. Click **View Details** to see detailed information about a user in a modal.

---

## Future Enhancements

1. Add **server-side filtering** support.
2. Integrate with a real backend for production use.
3. Implement advanced features like export to CSV and infinite scrolling.

---

## Contributing
Feel free to fork this repository, submit issues, or create pull requests. All contributions are welcome!

---


