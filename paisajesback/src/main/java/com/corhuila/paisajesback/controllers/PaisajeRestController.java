package com.corhuila.paisajesback.controllers;

import com.corhuila.paisajesback.models.entity.Paisaje;
import com.corhuila.paisajesback.models.service.IPaisajeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;


@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class PaisajeRestController {

    @Autowired
    private IPaisajeService paisajeService;

    @GetMapping("/paisajes")
    public List<Paisaje> index(){
        return paisajeService.findAll();
    }

    @GetMapping("/paisajes/{id}")
    public Paisaje show(@PathVariable Long id){
        return paisajeService.findById(id);
    }

    @PostMapping("/paisajes")
    @ResponseStatus(HttpStatus.CREATED)
    public Paisaje create(@RequestBody Paisaje paisaje){
        return paisajeService.save(paisaje);
    }


    @PutMapping("/paisajes/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Paisaje update(@RequestBody Paisaje paisaje, @PathVariable Long id) {

        Paisaje paisajeActual = paisajeService.findById(id);
        if (paisajeActual == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Paisaje not found with id " + id);
        }
        paisajeActual.setLongitud(paisaje.getLongitud());
        paisajeActual.setTipo(paisaje.getTipo());
        paisajeActual.setNombre(paisaje.getNombre());
        paisajeActual.setUbicacion(paisaje.getUbicacion());
        paisajeActual.setAltitudMax(paisaje.getAltitudMax());
        paisajeActual.setUrl(paisaje.getUrl());
        return paisajeService.save(paisajeActual);
    }

    @DeleteMapping("/paisajes/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete (@PathVariable Long id){
        paisajeService.delete(id);
    }
}
