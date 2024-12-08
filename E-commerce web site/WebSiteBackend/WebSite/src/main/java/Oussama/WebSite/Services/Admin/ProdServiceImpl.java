package Oussama.WebSite.Services.Admin;

import Oussama.WebSite.Entity.Category;
import Oussama.WebSite.Entity.Prod;
import Oussama.WebSite.Repository.CategoryRepository;
import Oussama.WebSite.Repository.ProdRepository;
import Oussama.WebSite.dto.ProdDto;
import io.jsonwebtoken.io.IOException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProdServiceImpl implements ProdService{
    private final ProdRepository prodRepository;
    private final CategoryService categoryService;
    private final CategoryRepository categoryRepository;

    public ProdDto addProduct(ProdDto prodDto) throws IOException, java.io.IOException {
        Prod prod = new Prod();
        prod.setName(prodDto.getName());
        prod.setDescription(prodDto.getDescription());
        prod.setPrice(prodDto.getPrice());
        prod.setImg(prodDto.getImg().getBytes());
        Category category = categoryRepository.findById(prodDto.getCategoryId()).orElseThrow();
        prod.setCategory(category);
        return prodRepository.save(prod).getDto();

    }
    public List<ProdDto> getAllProduct(){
            List<Prod> prods = prodRepository.findAll();
            return prods.stream()
                    .map(Prod::getDto)
                    .collect(Collectors.toList());
        }
    @Override
    public ProdDto editProduct(Long id, ProdDto prodDto) throws java.io.IOException {
        Prod prod = prodRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));

        // Mettez à jour les propriétés du produit avec les valeurs de prodDto
        prod.setName(prodDto.getName());
        prod.setDescription(prodDto.getDescription());
        prod.setPrice(prodDto.getPrice());
        prod.setImg(prodDto.getImg().getBytes());

        Category category = categoryRepository.findById(prodDto.getCategoryId()).orElseThrow(() -> new RuntimeException("Category not found"));
        prod.setCategory(category);

        return prodRepository.save(prod).getDto();
    }

    @Override
    public void deleteProduct(Long id) {
        prodRepository.deleteById(id);
    }
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }
    @Override
    public ProdDto getProductById(Long id) {
        Prod prod = prodRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));

        return prod.getDto();
    }
    }


