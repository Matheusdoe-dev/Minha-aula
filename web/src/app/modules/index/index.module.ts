import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { IndexViewComponent } from './index-view/index-view.component';

@NgModule({
  declarations: [IndexViewComponent],
  imports: [CommonModule, SharedModule],
})
export class IndexModule {}
