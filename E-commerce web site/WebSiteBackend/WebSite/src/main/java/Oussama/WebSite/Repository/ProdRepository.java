package Oussama.WebSite.Repository;

import Oussama.WebSite.Entity.Prod;
import Oussama.WebSite.Entity.User;
import jakarta.persistence.EntityManager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdRepository extends JpaRepository<Prod,Long> {
    public static List<Prod> findAllByNameContaining(EntityManager entityManager, String name) {
        String jpqlQuery = "SELECT p FROM Prod p WHERE p.name LIKE :name";
        return entityManager.createQuery(jpqlQuery, Prod.class)
                .setParameter("name", "%" + name + "%")
                .getResultList();
    }
}
