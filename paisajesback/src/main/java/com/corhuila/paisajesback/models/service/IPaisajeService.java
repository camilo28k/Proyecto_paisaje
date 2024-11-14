package com.corhuila.paisajesback.models.service;

import com.corhuila.paisajesback.models.entity.Paisaje;

import java.util.List;


public interface IPaisajeService {

    public List<Paisaje> findAll();

    public Paisaje findById(Long id);

    public Paisaje save (Paisaje paisaje);

    public void delete(Long id);


}
