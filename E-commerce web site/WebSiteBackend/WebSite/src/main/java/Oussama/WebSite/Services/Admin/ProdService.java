package Oussama.WebSite.Services.Admin;

import Oussama.WebSite.Entity.Category;
import Oussama.WebSite.dto.ProdDto;
import io.jsonwebtoken.io.IOException;

import java.util.List;

public interface ProdService {
     ProdDto addProduct(ProdDto prodDto) throws IOException,java.io.IOException;
     List<ProdDto> getAllProduct();
    ProdDto editProduct(Long id, ProdDto prodDto) throws java.io.IOException;
    void deleteProduct(Long id);
    List<Category> getAllCategories();

    ProdDto getProductById(Long id);
}
