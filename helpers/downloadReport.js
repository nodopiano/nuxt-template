import XLSX from 'xlsx'
import { saveAs } from 'file-saver'

export default class DownloadReport {
  constructor(data) {
    this.data = data
    this.worksheetName = worksheetName
  }

  xlsx(worksheetName = 'Foglio 1') {
    this.xlsxFile = XLSX.utils.json_to_sheet(this.data)
    return this
  }

  csv() {
    this.xlsx()
    this.csvFile = XLSX.utils.sheet_to_csv(this.xlsxFile)
    return this
  }

  get() {
    return this.csvFile || this.xlsxFile
  }

  download(filename) {
    if (this.csvFile) {
      const blob = new Blob([this.csvFile], {
        type: 'text/plain;charset=utf-8'
      })
      saveAs(blob, `${filename}.csv`)
    } else {
      let wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, this.xlsxFile, this.worksheetName)
      XLSX.writeFile(wb, `${filename}.xlsx`)
    }
  }
}
