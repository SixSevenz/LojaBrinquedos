import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-amber-100 border-b-4 border-yellow-400 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    {/* Logo / Nome da Loja */}
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-black tracking-wider text-orange-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                            ✨ Six<span className="text-purple-600">Seven</span>
                        </span>
                    </div>

                    {/* Links de Navegação (Desktop) */}
                    <nav className="hidden md:flex space-x-8 font-bold text-gray-700">
                        <a href="#" className="text-purple-600 hover:text-purple-800 transition">Início</a>
                        <a href="#" className="hover:text-orange-500 transition">Brinquedos</a>
                        <a href="#" className="hover:text-yellow-600 transition">Novidades</a>
                        <a href="#" className="hover:text-green-600 transition">Ofertas 🎈</a>
                    </nav>

                    {/* Ícones de Ação (Desktop) */}
                    <div className="hidden md:flex items-center space-x-6 text-gray-700">
                        <button className="hover:text-purple-600 transition" aria-label="Buscar">
                            <Search className="h-6 w-6" />
                        </button>
                        <button className="hover:text-orange-500 transition" aria-label="Minha Conta">
                            <User className="h-6 w-6" />
                        </button>
                        <button className="relative hover:text-yellow-600 transition" aria-label="Carrinho">
                            <ShoppingCart className="h-6 w-6" />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                                3
                            </span>
                        </button>
                    </div>

                    {/* Botão Menu Hamburguer (Mobile) */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-purple-600 focus:outline-none"
                        >
                            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Lateral / Dropdown (Mobile) */}
            {isOpen && (
                <div className="md:hidden bg-amber-50 border-t-2 border-amber-200 px-4 pt-2 pb-4 space-y-3 font-bold text-gray-700">
                    <a href="#" className="block py-2 text-purple-600">Início</a>
                    <a href="#" className="block py-2 hover:text-orange-500">Brinquedos</a>
                    <a href="#" className="block py-2 hover:text-yellow-600">Novidades</a>
                    <a href="#" className="block py-2 hover:text-green-600">Ofertas 🎈</a>
                    <div className="pt-4 border-t border-amber-200 flex justify-around text-gray-600">
                        <button className="flex flex-col items-center space-y-1 text-sm">
                            <Search className="h-6 w-6" />
                            <span>Buscar</span>
                        </button>
                        <button className="flex flex-col items-center space-y-1 text-sm">
                            <User className="h-6 w-6" />
                            <span>Conta</span>
                        </button>
                        <button className="flex flex-col items-center space-y-1 text-sm relative">
                            <ShoppingCart className="h-6 w-6" />
                            <span>Carrinho</span>
                            <span className="absolute top-0 right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                                3
                            </span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
