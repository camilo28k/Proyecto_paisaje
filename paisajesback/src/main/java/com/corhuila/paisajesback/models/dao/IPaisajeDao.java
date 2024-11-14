package com.corhuila.paisajesback.models.dao;

import com.corhuila.paisajesback.models.entity.Paisaje;
import org.springframework.data.repository.CrudRepository;

public interface IPaisajeDao extends CrudRepository<Paisaje,Long> {

}
