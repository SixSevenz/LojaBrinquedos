import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-red-900 text-gray-50">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo / Descrição */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            Six<span className="text-yellow-600">Seven</span>
                        </h2>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-gray-100">
                            SIX SEVEEEEEEENNN
                        </p>

                        {/* Redes sociais */}
                        <div className="mt-6 flex gap-4">
                            <a
                                href="#"
                                className="rounded-full bg-yellow-600 p-2 transition hover:bg-blue-600 hover:text-black"
                                aria-label="Instagram"
                            >
                                Instagram
                            </a>

                            <a
                                href="#"
                                className="rounded-full bg-yellow-600 p-2 transition hover:bg-blue-600 hover:text-black"
                                aria-label="LinkedIn"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="rounded-full bg-yellow-600 p-2 transition hover:bg-blue-600 hover:text-black"
                                aria-label="GitHub"
                            >
                                Youtube
                            </a>
                        </div>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Links
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <a href="#" className="transition hover:text-yellow-600">
                                    Sobre nós
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition hover:text-yellow-600">
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition hover:text-yellow-600">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition hover:text-indigo-400">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Suporte */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Suporte
                        </h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <a href="#" className="transition hover:text-indigo-400">
                                    Central de ajuda
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition hover:text-indigo-400">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition hover:text-indigo-400">
                                    Termos de uso
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition hover:text-indigo-400">
                                    Política de privacidade
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Newsletter
                        </h3>

                        <p className="mt-4 text-sm text-gray-400">
                            Receba novidades e conteúdos diretamente no seu e-mail.
                        </p>

                        <form className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
                            <input
                                type="email"
                                placeholder="Seu melhor e-mail"
                                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            />

                            <button
                                type="submit"
                                className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
                            >
                                Inscrever-se
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 border-t border-gray-800 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
                        <p>
                            © {new Date().getFullYear()} MinhaMarca. Todos os direitos
                            reservados.
                        </p>

                        <div className="flex gap-6">
                            <a href="#" className="transition hover:text-white">
                                Privacidade
                            </a>
                            <a href="#" className="transition hover:text-white">
                                Termos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}







export default Footer
