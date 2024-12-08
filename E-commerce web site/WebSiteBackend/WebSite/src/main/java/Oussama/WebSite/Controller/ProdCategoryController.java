package Oussama.WebSite.Controller;

import Oussama.WebSite.Entity.Category;
import Oussama.WebSite.Services.Admin.ProdService;
import Oussama.WebSite.dto.ProdDto;
import io.jsonwebtoken.io.IOException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class ProdCategoryController {
private final ProdService prodService;

    @PostMapping("/addProduct")
    public ResponseEntity<ProdDto> addProduct (@ModelAttribute ProdDto prodDto) throws IOException, java.io.IOException {
        ProdDto prodDto1 = prodService.addProduct(prodDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(prodDto1);
    }
    @PutMapping("/EditProduct/{id}")
    public ResponseEntity<ProdDto> editProduct(@PathVariable Long id, @ModelAttribute ProdDto prodDto) throws java.io.IOException {
        ProdDto editedProduct = prodService.editProduct(id,prodDto);
        return ResponseEntity.ok(editedProduct);
    }

    @DeleteMapping("/DeleteProduct/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        prodService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/GetAllProducts")
    public ResponseEntity<List<ProdDto>> getAllProducts() {
        List<ProdDto> products = prodService.getAllProduct();
        return ResponseEntity.ok(products);
    }
    @GetMapping("/GetAllCategory")
    public ResponseEntity<List<Category>> getAllCategory() {
        List<Category> Categorys = prodService.getAllCategories();
        return ResponseEntity.ok(Categorys);
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProdDto> getProductById(@PathVariable Long id) {
        ProdDto product = prodService.getProductById(id);
        return ResponseEntity.ok(product);
    }
}