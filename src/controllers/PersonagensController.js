const Personagem = require("../models/Personagem");

const getAll = async (req, res) => {
  try {
    const personagens = await Personagem.find(); // Promisse
    if (personagens.length === 0)
      return res
        .status(404)
        .send({ message: "Não existem personagens cadastrados!" });
    return res.send({ personagens });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const personagem = await Personagem.findById(id);
    if (!personagem) {
      res.status(404).json({ message: "Personagem não encontrado" });
      return;
    }
    return res.send({ personagem });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const create = async (req, res) => {
  const { nome, tipo, genero, imagem } = req.body;

  if (!nome || !tipo || !genero || !imagem) {
    res.status(400).send({
      message: "Você não enviou todos os dados necessários para o cadastro",
    });
    return;
  }

  const novoPersonagem = await new Personagem({
    nome,
    tipo,
    genero,
    imagem,
  });

  try {
    await novoPersonagem.save();
    return res
      .status(201)
      .send({ message: "Personagem criado com sucesso", novoPersonagem });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const update = async (req, res) => {
  const { nome, tipo, genero, imagem } = req.body;

  if (!nome || !tipo || !genero || !imagem) {
    res.status(400).send({
      message: "Você não enviou todos os dados necessários para o cadastro",
    });
    return;
  }

  res.personagem.nome = nome;
  res.personagem.tipo = tipo;
  res.personagem.genero = genero;
  res.personagem.imagem = imagem;

  try {
    await res.personagem.save();
    res.send({ message: "Personagem alterado com sucesso!" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const del = async (req, res) => {
  try {
    await res.personagem.remove();
    return res.send({ message: "Personagem removido com sucesso!" });
  } catch (err) {
    return res.status(500).send({ erro: err.message });
  }
};

const filterAll = async (req, res) => {
  let { nome, tipo, genero } = req.query;

  !nome ? (nome = "") : (nome = nome);
  !tipo ? (tipo = "") : (tipo = tipo);
  !genero ? (genero = "") : (genero = genero);

  try {
    const personagens = await Personagem.find({
      nome: { $regex: `${nome}`, $options: 'i' },
      tipo: { $regex: `${tipo}`, $options: 'i'},
      genero: { $regex: `${genero}`, $options: 'i'},
    });

    if (personagens.length === 0)
      return res.status(404).send({ erro: "Personagem não encontrado" });

    return res.send({ personagens });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  filterAll,
};