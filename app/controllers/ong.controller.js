const db = require("../models");
const Ong = db.ong;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Conteúdo do Body não pode ser vazio."
        });
          return;
    }

    Ong.create(req.body)
    .then(data => { res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algo inesperado aconteceu."
        })
    })
};

exports.findAll = (req, res) => {
    Ong.findAll().then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algo inesperado aconteceu."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Ong.findByPk(id).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Ong não encontrada."
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Ong.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Ong atualizada com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possível atualizar Ong com id=${id}. Ong pode não ter sido encontrada ou req.body está vazio!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao atualizar Ong com id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Ong.destroy(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Ong deletada com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possível deletar Ong com id=${id}. Ong pode não ter sido encontrada ou req.body está vazio!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao deletar Ong com id=" + id
        });
      });

};

exports.deleteAll = (req, res) => {
    Ong.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Todas Ongs deletadas com sucesso!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Algo inesperado aconteceu."
          });
        });
};

exports.findByName = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: {[Op.like]: `%${nome}%`} } : null;

    Ong.findAll({ where: { where: condition } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algo inesperado aconteceu."
        });
      });
  };