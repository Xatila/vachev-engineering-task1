import { FC } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const App: FC = () => <main className={inter.className}></main>;

export default App;
