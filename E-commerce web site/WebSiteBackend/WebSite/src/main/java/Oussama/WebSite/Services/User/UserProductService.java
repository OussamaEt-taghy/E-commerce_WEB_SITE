package Oussama.WebSite.Services.User;

import Oussama.WebSite.dto.ProdDto;

import java.util.List;
public interface UserProductService {
    List<ProdDto> searchproductByname(String name);
    List<ProdDto>getAllProduct();
}
