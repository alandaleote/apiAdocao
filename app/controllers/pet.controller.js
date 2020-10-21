const db = require("../models");
const Pet = db.pet;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Conteúdo do Body não pode ser vazio."
        });
          return;
    }

    Pet.create(req.body)
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
    Pet.findAll().then(data => {
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

    Pet.findOne({
      id: id,
      include: [
        db.adotante,
        db.ong
      ]
    }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "pet não encontrado."
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Pet.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "pet atualizado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possível atualizar pet com id=${id}. pet pode não ter sido encontrado ou req.body está vazio!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao atualizar pet com id=" + id
        });
      });
};

exports.delete = (req, res, next) => {
    const id = req.params.id;

    Pet.destroy(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "pet deletado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possível deletar pet com id=${id}. pet pode não ter sido encontrado ou req.body está vazio!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erro ao deletar pet com id=" + id
        });
      });

};

exports.deleteAll = (req, res, next) => {
    Pet.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Todos pets deletados com sucesso!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Algo inesperado aconteceu."
          });
        });
};

exports.findBySpecies = (req, res, next) => {
  const especie = req.params.especie
    Pet.findAll({
      especie: {[Op.like]: `%${especie}%`}
    }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algo inesperado aconteceu."
        });
    });
};

exports.findByGender = (req, res, next) => {
  const sexo = req.params.sexo
    Pet.findAll({
      sexo: {[Op.like]: `%${sexo}%`}
    }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algo inesperado aconteceu."
        });
    });
};
exports.findByAge = (req, res, next) => {
  const idade = req.params.idade
    Pet.findAll({
      idade: {[Op.like]: `%${idade}%`}
    }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algo inesperado aconteceu."
        });
    });
};

