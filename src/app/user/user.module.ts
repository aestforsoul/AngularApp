import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserService } from './user.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SortPipe } from './shared/sort.pipe';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [UserComponent, FilterPipe, SortPipe],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    FlexLayoutModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [UserService],
})
export class UserModule {}
