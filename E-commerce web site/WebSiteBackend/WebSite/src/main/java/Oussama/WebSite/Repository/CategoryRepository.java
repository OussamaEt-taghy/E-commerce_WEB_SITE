package Oussama.WebSite.Repository;

import Oussama.WebSite.Entity.Category;
import Oussama.WebSite.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long>  {
}
