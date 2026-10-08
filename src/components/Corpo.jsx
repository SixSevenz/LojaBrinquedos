import React from 'react'

const Body = () => {
    const produtos = [
        {
            id: 1,
            nome: 'Carrinho de Controle Remoto',
            preco: 'R$ 89,90',
            imagem:
                'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=500&q=80',
        },
        {
            id: 2,
            nome: 'Urso de Pelúcia',
            preco: 'R$ 59,90',
            imagem:
                'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=500&q=80',
        },
        {
            id: 3,
            nome: 'Blocos de Montar',
            preco: 'R$ 74,90',
            imagem:
                'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80',
        },
        {
            id: 4,
            nome: 'Boneca Infantil',
            preco: 'R$ 99,90',
            imagem:
                'https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=500&q=80',
        },
    ]

    const categorias = [
        {
            nome: 'Bonecas',
            emoji: '🧸',
            cor: 'from-pink-100 to-pink-200',
            hover: 'hover:border-pink-400',
        },
        {
            nome: 'Carrinhos',
            emoji: '🚗',
            cor: 'from-blue-100 to-blue-200',
            hover: 'hover:border-blue-400',
        },
        {
            nome: 'Pelúcias',
            emoji: '🐻',
            cor: 'from-yellow-100 to-yellow-200',
            hover: 'hover:border-yellow-400',
        },
        {
            nome: 'Jogos',
            emoji: '🎲',
            cor: 'from-green-100 to-green-200',
            hover: 'hover:border-green-400',
        },
    ]

    return (
        <main className="min-h-screen bg-slate-50 font-sans antialiased">

            {/* CATEGORIAS */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="mb-10 text-center">
                    <span className="font-semibold text-purple-600 tracking-wider text-sm">
                        CATEGORIAS
                    </span>

                    <h2 className="mt-2 text-3xl font-extrabold text-slate-800 md:text-4xl">
                        Encontre seu brinquedo favorito 🎁
                    </h2>

                    <p className="mt-3 text-slate-500">
                        Escolha uma categoria e comece a diversão!
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                    {categorias.map((categoria) => (
                        <div
                            key={categoria.nome}
                            className={`group cursor-pointer rounded-3xl border-2 border-transparent bg-gradient-to-br ${categoria.cor} p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${categoria.hover}`}
                        >
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-5xl shadow-md transition duration-300 group-hover:scale-110">
                                {categoria.emoji}
                            </div>

                            <h3 className="mt-4 text-lg font-bold text-slate-800">
                                {categoria.nome}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500 font-medium">
                                Explorar produtos →
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRODUTOS */}
            <section className="mx-auto max-w-6xl px-6 pb-20">
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <span className="font-semibold text-purple-600 tracking-wider text-sm">
                            DESTAQUES
                        </span>

                        <h2 className="mt-1 text-3xl font-extrabold text-slate-800">
                            Mais vendidos ⭐
                        </h2>

                        <p className="mt-2 text-slate-500">
                            Os favoritos da criançada!
                        </p>
                    </div>

                    <button className="self-start rounded-full border-2 border-purple-600 px-5 py-2 font-semibold text-purple-600 transition hover:bg-purple-600 hover:text-white sm:self-auto">
                        Ver todos →
                    </button>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {produtos.map((produto) => (
                        <div
                            key={produto.id}
                            className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
                        >
                            {/* Imagem */}
                            <div className="relative overflow-hidden bg-slate-100">
                                <img
                                    src={produto.imagem}
                                    alt={produto.nome}
                                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                                />

                                <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow">
                                    OFERTA
                                </span>
                            </div>

                            {/* Conteúdo */}
                            <div className="p-5 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="min-h-[56px] text-lg font-bold text-slate-800">
                                        {produto.nome}
                                    </h3>

                                    <div className="mt-3 flex items-center gap-1 text-yellow-400 text-sm">
                                        ⭐⭐⭐⭐⭐
                                        <span className="ml-1 text-xs text-slate-400">
                                            (25)
                                        </span>
                                    </div>

                                    <div className="mt-3">
                                        <span className="text-sm text-slate-400 line-through">
                                            R$ 119,90
                                        </span>

                                        <p className="text-2xl font-extrabold text-purple-600">
                                            {produto.preco}
                                        </p>
                                    </div>
                                </div>

                                <button className="mt-5 w-full rounded-xl bg-purple-600 py-3 font-bold text-white transition duration-300 hover:bg-purple-700 hover:shadow-lg">
                                    🛒 Adicionar ao carrinho
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </main>
    )
}

export default Body