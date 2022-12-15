package com.book.controller;

import com.book.repository.UserRepository;
import com.book.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody final User User) {
        User localUser = new User(User.getUsername(), User.getPassword(), User.getFirstName(), User.getLastName(),
                User.getPatronymic(), User.getPhone(), User.getInfo(), User.getRole());
        userRepository.save(localUser);
        return new ResponseEntity<>(localUser, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") Integer id, @RequestBody final User User) {
        Optional<User> oldUser = Optional.ofNullable(userRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "No such Book")));
        if (oldUser.isPresent()) {
            User newUser = oldUser.get();
            newUser.setUsername(User.getUsername());
            newUser.setPassword(User.getPassword());
            newUser.setFirstName(User.getFirstName());
            newUser.setLastName(User.getLastName());
            newUser.setPatronymic(User.getPatronymic());
            newUser.setPhone(User.getPhone());
            newUser.setInfo(User.getInfo());
            newUser.setRole(User.getRole());

            return new ResponseEntity<>(userRepository.save(newUser), HttpStatus.OK);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No such Book");
        }
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> UserList = new ArrayList<User>();
        userRepository.findAll().forEach(UserList::add);
        return new ResponseEntity<>(UserList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Integer id) {
        Optional<User> User = Optional.ofNullable(userRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "No such Book")));
        return new ResponseEntity<>(User.get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<User> deleteUserById(@PathVariable("id") Integer id) {
        Optional<User> User = Optional.ofNullable(userRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "No such Book")));
        userRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
