import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { PagesRoutingModule } from './pages-routing.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


import { NgxSliderModule } from '@angular-slider/ngx-slider';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrderTarckingComponent } from './order-tarcking/order-tarcking.component';
import { ProfileAuthenticationsComponent } from './profile-authentications/profile-authentications.component';
import { FaqComponent } from './faq/faq.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { CartComponent } from './cart/cart.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrandComponent } from './brand/brand.component';
import { ShopFromLeftComponent } from './shop-from-left/shop-from-left.component';
import { ShopFromRightComponent } from './shop-from-right/shop-from-right.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { ProductsComponent } from './products/products.component';
import { SliderCategoryComponent } from './slider-category/slider-category.component';
import { ClientReviewComponent } from './client-review/client-review.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SlickCarouselModule } from 'ngx-slick-carousel';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    OrderTarckingComponent,
    ProfileAuthenticationsComponent,
    FaqComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent,
    PageNotFoundComponent,
    ProductGridComponent,
    CartComponent,
    BrandComponent,
    ShopFromLeftComponent,
    ShopFromRightComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    WishlistComponent,
    BlogComponent,
    ContactComponent,
    BlogGridComponent,
    BlogDetailsComponent,
    ProductsComponent,
    SliderCategoryComponent,
    ClientReviewComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModalModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbPaginationModule,
    NgxSliderModule,
    SlickCarouselModule

  ]
})
export class PagesModule { }
