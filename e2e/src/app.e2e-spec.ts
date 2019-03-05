import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display TRM value', () => {
    page.navigateTo();
    expect(element(by.id('trmHoy')).getText()).not.toBe('');
  });

  it('should insert motocycle and list on the table', () => {
    page.navigateTo();
    element(by.id('btnRegistrarMoto')).click();
    element(by.id('placa')).sendKeys('RFG534');
    element(by.id('cilindraje')).sendKeys(125);
    element(by.id('btnRegistrar')).click();
    //TODO validar que se muestre la info en la tabla
    //TODO ajustar refresco
    page.navigateTo();
    element(by.id('inputBuscar')).sendKeys('RFG534');
    element(by.className('btnSalida')).click();
  });

  it('should insert car and list on the table', () => {
    page.navigateTo();
    element(by.id('btnRegistrarCarro')).click();
    element(by.id('placa')).sendKeys('MNJ721');
    expect(element(by.id('cilindraje')).isPresent()).toBe(false);
    element(by.id('btnRegistrar')).click();
    //TODO validar que se muestre la info en la tabla
    //TODO ajustar refresco
    page.navigateTo();
    element(by.id('inputBuscar')).sendKeys('MNJ721');
    element(by.className('btnSalida')).click();
  });

  it('should mark exit of vehicule and pay correct value', () => {
    page.navigateTo();
    //ingresar vehiculo
    element(by.id('btnRegistrarCarro')).click();
    element(by.id('placa')).sendKeys('HPY721');
    element(by.id('btnRegistrar')).click();
    //salida vehiculo
    element(by.id('inputBuscar')).sendKeys('HPY721');
    //TODO validar solo encontrar uno
    //TODO ajustar refresco
    page.navigateTo();
    element(by.className('btnSalida')).click();
    expect(element(by.id('lblPlacaPago')).getText()).toEqual('HPY721');
    expect(element(by.id('lblFechaInicioPago')).getText()).not.toBe('');
    expect(element(by.id('lblFechaFinPago')).getText()).not.toBe('');
    expect(element(by.id('lblValorPagar')).getText()).toEqual('$1,000.00');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
