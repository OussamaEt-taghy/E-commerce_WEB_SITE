package Oussama.WebSite.Controller;

import Oussama.WebSite.Services.Admin.ProdService;
import Oussama.WebSite.Services.User.UserProductService;
import Oussama.WebSite.dto.ProdDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserProductController {


    private final UserProductService userProductService;
    private final ProdService prodService;

    @GetMapping("/products")
    public ResponseEntity<List<ProdDto>> getAllProducts(){
        List<ProdDto> productDtos = userProductService.getAllProduct();
        return ResponseEntity.ok (productDtos);
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<List<ProdDto>> getAllProductByName(@PathVariable String name)
    { List<ProdDto> productDtos = userProductService.searchproductByname(name);
        return ResponseEntity.ok (productDtos);
}
    @GetMapping("/{id}")
    public ResponseEntity<ProdDto> getProductById(@PathVariable Long id) {
        ProdDto product = prodService.getProductById(id);
        return ResponseEntity.ok(product);
    }

}
