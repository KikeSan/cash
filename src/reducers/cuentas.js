import { ADD_CUENTA } from "../actions/action-types";

const initialState = {
	cuentas: [
		{
			id: "001",
			nombre: "Cuenta demostración",
			tipo: "Efectivo",
			entidad: "",
			monto: 211,
			apertura: 100,
			alertaMonto: 200,
			fecha: "16/12/2018",
			transacciones: [
				{
					id: 1,
					tipoTx: "ingreso",
					fecha: "18/12/2018",
					categoria: "Alimentación",
					tipoComprobante: "Factura",
					comprobante: "0009-000000999",
					usuario: "kike",
					estado: "pendiente",
					importe: 200,
					descripcion: ""
				},
				{
					id: 2,
					tipoTx: "egreso",
					fecha: "16/12/2018",
					categoria: "Alimentación",
					tipoComprobante: "Factura",
					comprobante: "0009-000000899",
					usuario: "kike",
					estado: "aprobado",
					importe: 12,
					descripcion: ""
				},
				{
					id: 3,
					tipoTx: "ingreso",
					fecha: "20/12/2018",
					categoria: "Alimentación",
					tipoComprobante: "Boleta de venta",
					comprobante: "0009-000021999",
					usuario: "kike",
					estado: "aprobado",
					importe: 100,
					descripcion: "Propinas"
				},
				{
					id: 4,
					tipoTx: "egreso",
					fecha: "22/12/2018",
					categoria: "Alimentación",
					tipoComprobante: "Boleta de venta",
					comprobante: "0009-034000899",
					usuario: "kike",
					estado: "pendiente",
					importe: 20,
					descripcion: "Menu"
				}
			],
			admin: "kike",
			compartidoCon: ["public", "demo"]
		},
		{
			id: "002",
			nombre: "BCP Miraflores",
			tipo: "Banco",
			entidad: "Banco de Crédito del Perú",
			monto: 880.25,
			apertura: 500,
			alertaMonto: 300,
			fecha: "01/12/2018",
			transacciones: [
				{
					id: 1,
					tipoTx: "egreso",
					fecha: "02/12/2018",
					categoria: "Gastos de personal",
					tipoComprobante: "Recibo de egreso de caja",
					comprobante: "0001-000000001",
					usuario: "kike",
					estado: "pendiente",
					importe: 140,
					descripcion: ""
				}
			],
			admin: "kike",
			compartidoCon: []
		},
		{
			id: "003",
			nombre: "Demo Kike",
			tipo: "Efectivo",
			entidad: "",
			monto: 550,
			apertura: 500,
			alertaMonto: 120,
			fecha: "10/12/2018",
			transacciones: [
				{
					id: 1,
					tipoTx: "ingreso",
					fecha: "18/12/2018",
					categoria: "Salud y bienestar",
					tipoComprobante: "Boleta de venta",
					comprobante: "0000-00123456",
					usuario: "kike",
					estado: "pendiente",
					importe: 50,
					descripcion: "Abono EPS"
				}
			],
			admin: "kike",
			compartidoCon: []
		}
	],
	tiposCuenta: ["Efectivo", "Banco", "Otros"],
	tipoComprobante: ["Factura", "Recibo por honorarios", "Boleta de venta", "Recibo de egreso de caja", "Recibo de ingreso de caja", "Declaración jurada"]
};

const cuentas = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CUENTA:
			return {
				...state,
				cuentas: state.cuentas.concat(action.payload)
			};

		default:
			return state;
	}
};

export default cuentas;
