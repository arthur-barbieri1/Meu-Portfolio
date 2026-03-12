@tailwind base;
@tailwind components;
@tailwind utilities;

*{
    font-family: 'Inter';
    scroll-behavior: smooth;
}

body {
    background-color: #E6EDF7;
}
/* barra lateral de rolamento*/
::-webkit-scrollbar{
    width: 10px;

    }

    ::-webkit-scrollbar-thumb{
        background-color: #161925;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
        background: rgb( 233 ,233, 233);
        border-radius: 10px;
    }


        @keyframes fade-in-up {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
    
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    
        .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
        }