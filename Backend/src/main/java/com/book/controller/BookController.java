package com.book.controller;

import com.book.model.Book;
import com.book.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/book")
@CrossOrigin
public class BookController {

    @Autowired
    BookRepository bookRepository;

    @PostMapping
    public ResponseEntity<Book> createBook(@RequestBody final Book book) {
        Book localBook = new Book(book.getName(), book.getPublisher(), book.getAuthors(), book.getDescription(),
                book.getSellPrice());
        bookRepository.save(localBook);
        return new ResponseEntity<>(localBook, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable("id") Integer id, @RequestBody final Book book) {
        Optional<Book> oldBook = Optional.ofNullable(bookRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "No such Book")));
        if (oldBook.isPresent()) {
            Book newBook = oldBook.get();
            newBook.setName(book.getName());
            newBook.setPublisher(book.getPublisher());
            newBook.setAuthors(book.getAuthors());
            newBook.setDescription(book.getDescription());
            newBook.setSellPrice(book.getSellPrice());

            return new ResponseEntity<>(bookRepository.save(newBook), HttpStatus.OK);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No such Book");
        }
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> bookList = new ArrayList<Book>();
        bookRepository.findAll().forEach(bookList::add);
        return new ResponseEntity<>(bookList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable("id") Integer id) {
        Optional<Book> book = Optional.ofNullable(bookRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "No such Book")));
        return new ResponseEntity<>(book.get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Book> deleteBookById(@PathVariable("id") Integer id) {
        Optional<Book> book = Optional.ofNullable(bookRepository.findById(id).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "No such Book")));
        bookRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
