/**
 * Copyright 2020 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class HostNameAndIpmappingModule { 
  id:string;
  ip:string;
  assetname:string;
}
