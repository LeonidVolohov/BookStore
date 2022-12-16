package com.book.model;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_book", nullable = false)
    private Integer idBook;

//    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_user", nullable = false)
    private Integer idUser;

    @Column(name = "price_per_book")
    private Integer pricePerBook;

    @Column(name = "count")
    private Integer count;

    @Column(name = "buy_date")
    private Instant buyDate;

    @Column(name = "summary_price")
    private Integer summaryPrice;

    public Order() {}

    public Order(Integer idBook, Integer idUser, Integer pricePerBook, Integer count, Instant buyDate, Integer summaryPrice) {
        this.idBook = idBook;
        this.idUser = idUser;
        this.pricePerBook = pricePerBook;
        this.count = count;
        this.buyDate = buyDate;
        this.summaryPrice = summaryPrice;
    }

    public Integer getSummaryPrice() {
        return summaryPrice;
    }

    public void setSummaryPrice(Integer summaryPrice) {
        this.summaryPrice = summaryPrice;
    }

    public Instant getBuyDate() {
        return buyDate;
    }

    public void setBuyDate(Instant buyDate) {
        this.buyDate = buyDate;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Integer getPricePerBook() {
        return pricePerBook;
    }

    public void setPricePerBook(Integer pricePerBook) {
        this.pricePerBook = pricePerBook;
    }

    public Integer getIdUser() {
        return idUser;
    }

    public void setIdUser(Integer idUser) {
        this.idUser = idUser;
    }

    public Integer getIdBook() {
        return idBook;
    }

    public void setIdBook(Integer idBook) {
        this.idBook = idBook;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}