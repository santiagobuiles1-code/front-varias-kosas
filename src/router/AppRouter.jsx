import { CreatePublicationPage } from "../pages/CreatePublicationPage";
import { EditPublicationPage } from "../pages/EditPublicationPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { MyPublicationsPage } from "../pages/MyPublicationsPage";
import { PublicationDetailPage } from "../pages/PublicationDetailPage";
import { RegisterPage } from "../pages/RegisterPage";

export let router = [
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: "/publications",
        element: <MyPublicationsPage />
    },
    {
        path: "/edit",
        element: <EditPublicationPage />
    },
    {
        path: "/create",
        element: <CreatePublicationPage />
    },
    {
        path: "/details",
        element: <PublicationDetailPage />
    },
]