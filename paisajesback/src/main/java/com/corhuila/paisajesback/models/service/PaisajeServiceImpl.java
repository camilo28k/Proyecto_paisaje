package com.corhuila.paisajesback.models.service;

import com.corhuila.paisajesback.models.dao.IPaisajeDao;
import com.corhuila.paisajesback.models.entity.Paisaje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PaisajeServiceImpl implements IPaisajeService{

    @Autowired
    private IPaisajeDao paisajeDao;


    @Override
    @Transactional(readOnly = true)
    public List<Paisaje> findAll() {
        return (List<Paisaje>) paisajeDao.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Paisaje findById(Long id) {
        return paisajeDao.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Paisaje save(Paisaje paisaje) {
        return paisajeDao.save(paisaje);
    }

    @Override
    public void delete(Long id) {
        paisajeDao.deleteById(id);
    }
}
