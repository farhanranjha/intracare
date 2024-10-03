import { TemplateRef } from "@angular/core";

export interface ColumnConfig {
  name: string;
  field: string;
  filterType: string;
  options?: { value: string; label: string; checked: boolean }[];
  selectedOptions?: string[];
  isCustom?: boolean;
  template?: TemplateRef<any>;
  filterTemplate?: TemplateRef<any>;
  sort?: boolean;
  isFrozen?: boolean;
  formatDate?: boolean;
  valueFormatter?: (value: string) => void;
}
