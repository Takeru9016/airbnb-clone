# Airbnb Clone

## Description
This **Airbnb Clone** replicates the core functionalities of Airbnb, including listing accommodations, user authentication, and image uploading. Built with **Next.js**, **Prisma**, **Next Auth**, **Zustand**, **React Hook Form**, **Cloudinary**, and **TailwindCSS**, this project demonstrates my full-stack development skills with a focus on building scalable applications.

## Features
- Full-stack application with Prisma for database management.
- User authentication using Next Auth.
- State management with Zustand for better app state flow.
- Image uploading and handling using Cloudinary.
- Responsive, modern UI with TailwindCSS.
- Form validation and submission with React Hook Form.

## Tech Stack
- **Frontend**: Next.js, TailwindCSS
- **Backend**: Prisma, Next Auth
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **Image Management**: Cloudinary
- **Deployment**: Vercel

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Takeru9016/airbnb-clone.git
    cd airbnb-clone
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file with your Prisma, Cloudinary, and Next Auth credentials:
    ```env
    DATABASE_URL=your_prisma_database_url
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    NEXTAUTH_SECRET=your_nextauth_secret
    ```

4. **Run database migrations**:
    ```bash
    npx prisma migrate dev
    ```

5. **Run the development server**:
    ```bash
    npm run dev
    ```

6. **Access the app** at `http://localhost:3000`.

## Usage
- Sign in or sign up using Next Auth.
- Browse or list accommodations.
- Upload images of accommodations using Cloudinary.
- Enjoy a fully responsive, Airbnb-like user experience.

## Future Improvements
- Integration with Google Maps for better location-based listings.
- User reviews and ratings for accommodations.
