package Oussama.WebSite.Services.User;

import Oussama.WebSite.Entity.Prod;
import Oussama.WebSite.Repository.ProdRepository;
import Oussama.WebSite.dto.ProdDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserProductServicesImpl implements UserProductService{
    private final ProdRepository prodRepository;


    @Override
    public List<ProdDto> searchproductByname(String name) {
        return null;
    }

    public List<ProdDto> getAllProduct(){
        List<Prod> prods = prodRepository.findAll();
        return prods.stream()
                .map(Prod::getDto)
                .collect(Collectors.toList());
    }
    public ProdDto getProductById(Long id) {
        Prod prod = prodRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));

        return prod.getDto();
    }


}
