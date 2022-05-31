import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { OrderTarckingComponent } from './order-tarcking/order-tarcking.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductsComponent } from './products/products.component';
import { ProfileAuthenticationsComponent } from './profile-authentications/profile-authentications.component';
import { ShopFromLeftComponent } from './shop-from-left/shop-from-left.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'order-tracking',
    component: OrderTarckingComponent
  },
  {
    path: 'profile-authentication',
    component: ProfileAuthenticationsComponent
  },
  {
    path: 'term',
    component: TermsConditionComponent
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: 'product-grid',
    component: ProductGridComponent
  },
  {
    path: 'shop-from-left',
    component: ShopFromLeftComponent
  },
  {
    path: 'shop-from-right',
    component: ShopFromLeftComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blog-grid',
    component: BlogGridComponent
  },
  {
    path: 'blog-detail',
    component: BlogDetailsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'Pagination',
    component: PaginationComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
