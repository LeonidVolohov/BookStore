package com.book.controller;

import com.book.model.Order;
import com.book.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrderController {

    @Autowired
    OrderRepository orderRepository;

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody final Order order) {
        Order localOrder = new Order(order.getIdBook(), order.getIdUser(), order.getPricePerBook(), order.getCount(),
                order.getBuyDate(), order.getSummaryPrice());
        orderRepository.save(localOrder);
        return new ResponseEntity<>(localOrder, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable("id") Integer id, @RequestBody final Order order) {
        Optional<Order> oldOrder = Optional.ofNullable(orderRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "No such Order")));
        if (oldOrder.isPresent()) {
            Order newOrder = oldOrder.get();
            newOrder.setIdBook(order.getIdBook());
            newOrder.setIdUser(order.getIdUser());
            newOrder.setPricePerBook(order.getPricePerBook());
            newOrder.setCount(order.getCount());
            newOrder.setBuyDate(order.getBuyDate());
            newOrder.setSummaryPrice(order.getSummaryPrice());

            return new ResponseEntity<>(orderRepository.save(newOrder), HttpStatus.OK);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No such Order");
        }
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orderList = new ArrayList<Order>();
        orderRepository.findAll().forEach(orderList::add);
        return new ResponseEntity<>(orderList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable("id") Integer id) {
        Optional<Order> order = Optional.ofNullable(orderRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "No such Order")));
        return new ResponseEntity<>(order.get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Order> deleteOrderById(@PathVariable("id") Integer id) {
        Optional<Order> order = Optional.ofNullable(orderRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "No such Order")));
        orderRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
