import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  // { path: '**', redirectTo: '/404' },
];

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ContactsModule {}
