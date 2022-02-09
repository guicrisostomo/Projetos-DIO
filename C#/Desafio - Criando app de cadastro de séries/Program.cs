using System;

namespace DIO.Series
{
    class Program
    {
		static SerieRepositorio repositorioSerie = new SerieRepositorio();
		static FilmeRepositorio repositorioFilme = new FilmeRepositorio();

		static void Main(string[] args)
        {
            string opcaoUsuario = ObterOpcaoUsuario();
			string opcaoUsuarioFilmeSerie;

			while (opcaoUsuario.ToUpper() != "X")
			{
				switch (opcaoUsuario)
				{
					case "1":
						opcaoUsuarioFilmeSerie = obterInfoFilmeOuSerie(opcaoUsuario);

						if (opcaoUsuarioFilmeSerie == "1")
						{
							ListarFilme();
						} else if (opcaoUsuarioFilmeSerie == "2")
						{
							ListarSeries();
						} else if (opcaoUsuarioFilmeSerie == "3")
                        {
							ListarAmbos();
						}

						break;
					case "2":
						opcaoUsuarioFilmeSerie = obterInfoFilmeOuSerie(opcaoUsuario);

						if (opcaoUsuarioFilmeSerie == "1")
						{
							InserirFilme();
						}
						else if (opcaoUsuarioFilmeSerie == "2")
						{
							InserirSerie();
						}

						break;
					case "3":
						opcaoUsuarioFilmeSerie = obterInfoFilmeOuSerie(opcaoUsuario);

						if (opcaoUsuarioFilmeSerie == "1")
						{
							AtualizarFilme();
						}
						else if (opcaoUsuarioFilmeSerie == "2")
						{
							AtualizarSerie();
						}

						break;
					case "4":
						opcaoUsuarioFilmeSerie = obterInfoFilmeOuSerie(opcaoUsuario);

						if (opcaoUsuarioFilmeSerie == "1")
						{
							ExcluirFilme();
						}
						else if (opcaoUsuarioFilmeSerie == "2")
						{
							ExcluirSerie();
						}

						break;
					case "5":
						opcaoUsuarioFilmeSerie = obterInfoFilmeOuSerie(opcaoUsuario);

						if (opcaoUsuarioFilmeSerie == "1")
						{
							VisualizarFilme();
						}
						else if (opcaoUsuarioFilmeSerie == "2")
						{
							VisualizarSerie();
						}

						break;
					case "C":
						Console.Clear();
						break;

					default:
						Console.WriteLine("Opção inválida!");
						break;
				}

				opcaoUsuario = ObterOpcaoUsuario();
			}

			Console.WriteLine("Obrigado por utilizar nossos serviços.");
			Console.ReadLine();
        }

        private static void ExcluirSerie()
		{
			Console.Write("Digite o id da série: ");
			int indiceSerie = int.Parse(Console.ReadLine());

			repositorioSerie.Exclui(indiceSerie);
		}

        private static void VisualizarSerie()
		{
			Console.Write("Digite o id da série: ");
			int indiceSerie = int.Parse(Console.ReadLine());

			var serie = repositorioSerie.RetornaPorId(indiceSerie);

			Console.WriteLine(serie);
		}

        private static void AtualizarSerie()
		{
			bool flagAno = false;
			int entradaAno;

			Console.Write("Digite o id da série: ");
			int indiceSerie = int.Parse(Console.ReadLine());

			foreach (int i in Enum.GetValues(typeof(Genero)))
			{
				Console.WriteLine("{0}-{1}", i, Enum.GetName(typeof(Genero), i));
			}
			Console.Write("Digite o gênero entre as opções acima: ");
			int entradaGenero = int.Parse(Console.ReadLine());

			Console.Write("Digite o Título da Série: ");
			string entradaTitulo = Console.ReadLine();

			do
			{
				Console.Write("Digite o Ano de Início da Série: ");
				entradaAno = int.Parse(Console.ReadLine());

				if (entradaAno > DateTime.Today.Year)
                {
					Console.WriteLine("Ano inválido!");
				} else
                {
					flagAno = true;
                }

			} while (flagAno == false);

			Console.Write("Digite a Descrição da Série: ");
			string entradaDescricao = Console.ReadLine();

			Serie atualizaSerie = new Serie(id: indiceSerie,
										genero: (Genero)entradaGenero,
										titulo: entradaTitulo,
										ano: entradaAno,
										descricao: entradaDescricao);

			repositorioSerie.Atualiza(indiceSerie, atualizaSerie);
		}
        private static void ListarSeries()
		{
			Console.WriteLine("Listar séries");

			var lista = repositorioSerie.Lista();

			if (lista.Count == 0)
			{
				Console.WriteLine("Nenhuma série cadastrada.");
				return;
			}

			foreach (var serie in lista)
			{
                var excluido = serie.retornaExcluido();
                
				Console.WriteLine("#ID {0}: - {1} {2}", serie.retornaId(), serie.retornaTitulo(), (excluido ? "*Excluído*" : ""));
			}
		}

        private static void InserirSerie()
		{
			bool flagAno = false;
			int entradaAno;

			Console.WriteLine("Inserir nova série");

			foreach (int i in Enum.GetValues(typeof(Genero)))
			{
				Console.WriteLine("{0}-{1}", i, Enum.GetName(typeof(Genero), i));
			}
			Console.Write("Digite o gênero entre as opções acima: ");
			int entradaGenero = int.Parse(Console.ReadLine());

			Console.Write("Digite o Título da Série: ");
			string entradaTitulo = Console.ReadLine();

			do
			{
				Console.Write("Digite o Ano de Início da Série: ");
				entradaAno = int.Parse(Console.ReadLine());

				if (entradaAno > DateTime.Today.Year)
				{
					Console.WriteLine("Ano inválido!");
				}
				else
				{
					flagAno = true;
				}

			} while (flagAno == false);

			Console.Write("Digite a Descrição da Série: ");
			string entradaDescricao = Console.ReadLine();

			Serie novaSerie = new Serie(id: repositorioSerie.ProximoId(),
										genero: (Genero)entradaGenero,
										titulo: entradaTitulo,
										ano: entradaAno,
										descricao: entradaDescricao);

			repositorioSerie.Insere(novaSerie);
		}

		private static void ExcluirFilme()
		{
			Console.Write("Digite o id do filme: ");
			int indiceFilme = int.Parse(Console.ReadLine());

			repositorioFilme.Exclui(indiceFilme);
		}

		private static void VisualizarFilme()
		{
			Console.Write("Digite o id do filme: ");
			int indiceFilme = int.Parse(Console.ReadLine());

			var filme = repositorioFilme.RetornaPorId(indiceFilme);

			Console.WriteLine(filme);
		}

		private static void AtualizarFilme()
		{
			bool flagAno = false;
			int entradaAno;

			Console.Write("Digite o id do filme: ");
			int indiceFilme = int.Parse(Console.ReadLine());

			foreach (int i in Enum.GetValues(typeof(Genero)))
			{
				Console.WriteLine("{0}-{1}", i, Enum.GetName(typeof(Genero), i));
			}
			Console.Write("Digite o gênero entre as opções acima: ");
			int entradaGenero = int.Parse(Console.ReadLine());

			Console.Write("Digite o Título do filme: ");
			string entradaTitulo = Console.ReadLine();
			
			do
			{
				Console.Write("Digite o Ano do filme: ");
				entradaAno = int.Parse(Console.ReadLine());

				if (entradaAno > DateTime.Today.Year)
				{
					Console.WriteLine("Ano inválido!");
				}
				else
				{
					flagAno = true;
				}

			} while (flagAno == false);

			Console.Write("Digite a Descrição do filme: ");
			string entradaDescricao = Console.ReadLine();

			Filme atualizaFilme = new Filme(id: indiceFilme,
										genero: (Genero)entradaGenero,
										titulo: entradaTitulo,
										ano: entradaAno,
										descricao: entradaDescricao);

			repositorioFilme.Atualiza(indiceFilme, atualizaFilme);
		}
		private static void ListarFilme()
		{
			Console.WriteLine("Listar filme");

			var lista = repositorioFilme.Lista();

			if (lista.Count == 0)
			{
				Console.WriteLine("Nenhum filme cadastrado.");
				return;
			}

			foreach (var filme in lista)
			{
				var excluido = filme.retornaExcluido();

				Console.WriteLine("#ID {0}: - {1} {2}", filme.retornaId(), filme.retornaTitulo(), (excluido ? "*Excluído*" : ""));
			}
		}

		private static void InserirFilme()
		{
			bool flagAno = false;
			int entradaAno;

			Console.WriteLine("Inserir novo filme");

			foreach (int i in Enum.GetValues(typeof(Genero)))
			{
				Console.WriteLine("{0}-{1}", i, Enum.GetName(typeof(Genero), i));
			}
			Console.Write("Digite o gênero entre as opções acima: ");
			int entradaGenero = int.Parse(Console.ReadLine());

			Console.Write("Digite o Título do filme: ");
			string entradaTitulo = Console.ReadLine();
			
			do
			{
				Console.Write("Digite o Ano do filme: ");
				entradaAno = int.Parse(Console.ReadLine());

				if (entradaAno > DateTime.Today.Year)
				{
					Console.WriteLine("Ano inválido!");
				}
				else
				{
					flagAno = true;
				}

			} while (flagAno == false);

			Console.Write("Digite a Descrição do filme: ");
			string entradaDescricao = Console.ReadLine();

			Filme novaFilme = new Filme(id: repositorioFilme.ProximoId(),
										genero: (Genero)entradaGenero,
										titulo: entradaTitulo,
										ano: entradaAno,
										descricao: entradaDescricao);

			repositorioFilme.Insere(novaFilme);
		}

		private static void ListarAmbos()
		{
			Console.WriteLine("Listar filmes e séries");
			Console.WriteLine();
			Console.WriteLine("--------------FILMES--------------");

			var listaFilme = repositorioFilme.Lista();

			if (listaFilme.Count == 0)
			{
				Console.WriteLine("Nenhuma filme cadastrado.");
			}
			else
			{

				foreach (var filme in listaFilme)
				{
					var excluido = filme.retornaExcluido();

					Console.WriteLine("#ID {0}: - {1} {2}", filme.retornaId(), filme.retornaTitulo(), (excluido ? "*Excluído*" : ""));
				}

			}

			Console.WriteLine();
			Console.WriteLine("--------------SÉRIES--------------");

			var listaSerie = repositorioSerie.Lista();

			if (listaSerie.Count == 0)
			{
				Console.WriteLine("Nenhuma série cadastrada.");
			}
			else
			{

				foreach (var serie in listaSerie)
				{
					var excluido = serie.retornaExcluido();

					Console.WriteLine("#ID {0}: - {1} {2}", serie.retornaId(), serie.retornaTitulo(), (excluido ? "*Excluído*" : ""));
				}

			}
		}

		private static string ObterOpcaoUsuario()
		{
			Console.WriteLine();
			Console.WriteLine("DIO Séries a seu dispor!!!");
			Console.WriteLine("Informe a opção desejada:");

			Console.WriteLine("1- Listar");
			Console.WriteLine("2- Inserir");
			Console.WriteLine("3- Atualizar");
			Console.WriteLine("4- Excluir");
			Console.WriteLine("5- Visualizar");
			Console.WriteLine("C- Limpar Tela");
			Console.WriteLine("X- Sair");
			Console.WriteLine();

			string opcaoUsuario = Console.ReadLine().ToUpper();
			Console.WriteLine();
			return opcaoUsuario;
		}

		private static string obterInfoFilmeOuSerie(string opcaoUsuario)
        {
			Console.WriteLine("Informe a opção desejada:");

			Console.WriteLine("1- Filme");
			Console.WriteLine("2- Série");

			if (opcaoUsuario == "1")
            {
				Console.WriteLine("3- Ambos");
			}
			
			Console.WriteLine("V- Voltar");
			Console.WriteLine();

			string opcaoUsuarioFilmeSerie = Console.ReadLine().ToUpper();
			Console.WriteLine();
			return opcaoUsuarioFilmeSerie;
		}

    }
}
