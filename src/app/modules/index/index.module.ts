import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { IndexComponent } from './index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, SharedModule],
})
export class IndexModule {}
