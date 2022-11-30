package com.book;

import com.book.model.Book;
import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "\"order\"")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_book", nullable = false)
    private Book idBook;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_user", nullable = false)
    private UserProfile idUser;

    @Column(name = "price_per_book")
    private Integer pricePerBook;

    @Column(name = "count")
    private Integer count;

    @Column(name = "buy_date")
    private Instant buyDate;

    @Column(name = "summary_price")
    private Integer summaryPrice;

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

    public UserProfile getIdUser() {
        return idUser;
    }

    public void setIdUser(UserProfile idUser) {
        this.idUser = idUser;
    }

    public Book getIdBook() {
        return idBook;
    }

    public void setIdBook(Book idBook) {
        this.idBook = idBook;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}