import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {SectionModelClient} from '../models/section.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-section-editor',
  templateUrl: './admin-section-editor.component.html',
  styleUrls: ['./admin-section-editor.component.css']
})
export class AdminSectionEditorComponent implements OnInit {

  section: SectionModelClient = new SectionModelClient();
  constructor(private sectionService: SectionServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => this.getSectionById(params['sectionId']));
  }
  getSectionById(sectionId) {
    this.sectionService.getSectionById(sectionId)
      .then(section => this.section = section);
  }
  updateSection(sectionId) {

    this.sectionService.updateSectionById(sectionId, this.section.name, this.section.seats)
      .then(() => this.router.navigate(['admin']));
  }
  ngOnInit() {
  }

}
