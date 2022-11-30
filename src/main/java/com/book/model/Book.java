package com.book.model;
//
//import javax.persistence.*;
//
//@Entity
//@Table(name = "book")
//public class Book {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Basic(optional = false)
//    @Column(name = "id", unique = true)
//    private Long id;
//
//    @Column(name = "name")
//    private String name;
//
//    @Column(name = "publisher")
//    private String publisher;
//
//    @Column(name = "authors")
//    private String authors;
//
//    @Column(name = "description")
//    private String description;
//
//    @Column(name = "sell_price")
//    private Long sellPrice;
//
//    public Book(String name, String publisher, String authors, String description, Long sellPrice) {
//        this.name = name;
//        this.publisher = publisher;
//        this.authors = authors;
//        this.description = description;
//        this.sellPrice = sellPrice;
//    }
//
//    public Book() {}
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getPublisher() {
//        return publisher;
//    }
//
//    public void setPublisher(String publisher) {
//        this.publisher = publisher;
//    }
//
//    public String getAuthors() {
//        return authors;
//    }
//
//    public void setAuthors(String authors) {
//        this.authors = authors;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public Long getSellPrice() {
//        return sellPrice;
//    }
//
//    public void setSellPrice(Long sellPrice) {
//        this.sellPrice = sellPrice;
//    }
//}


import jakarta.persistence.*;

@Entity
@Table(name = "book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Lob
    @Column(name = "name")
    private String name;

    @Lob
    @Column(name = "publisher")
    private String publisher;

    @Lob
    @Column(name = "authors")
    private String authors;

    @Lob
    @Column(name = "description")
    private String description;

    @Column(name = "sell_price")
    private Integer sellPrice;

    public Book(String name, String publisher, String authors, String description, Integer sellPrice) {
        this.name = name;
        this.publisher = publisher;
        this.authors = authors;
        this.description = description;
        this.sellPrice = sellPrice;
    }

    public Integer getSellPrice() {
        return sellPrice;
    }

    public void setSellPrice(Integer sellPrice) {
        this.sellPrice = sellPrice;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthors() {
        return authors;
    }

    public void setAuthors(String authors) {
        this.authors = authors;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}