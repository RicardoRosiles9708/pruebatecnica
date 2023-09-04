export type EnvVars = {
  [key: string]: string;
};

export const DEFAULT_PRECISION = 19;
export const DEFAULT_SCALE = 6;
export const UUIDV4_LENGTH = 36;
export const DEFAULT_SUBJECT = 'G-Square - Valida tu cuenta';
export const CONTACT_SUBJECT = 'G-Square - Interés de Cliente';
export const INVITATION_SUBJECT = 'G-Square - invitación';
export const RESET_PASSWORD_SUBJECT = 'G-Square - contraseña reiniciada';
export const PAYMENT_INVOICE_SUBJECT = 'G-Square - Solicitud de factura';
export const CONFIRMATION_EMAIL_SUBJECT = 'G-Square - Tu bodega está lista para usar';
export const GUEST_CODE_SUBJECT = 'G-Square - Código de acceso';
export const CREATE_TOOL_SUBJECT = 'G-Square - Se ha creado un nuevo aditamento';
export const ACTIVATE_TOOL_SUBJECT = 'G-Square - Se ha activado un aditamento';
export const DEACTIVATE_TOOL_SUBJECT = 'G-Square - Se ha desactivado un aditamento';
export const NEW_UNITS_TOOL_SUBJECT = 'G-Square - Se han agregado nuevas unidades a un aditamento';
export const UPDATE_TOOL_SUBJECT = 'G-Square - Se ha editado un aditamento';
export const CREATE_REQUISITION_TOOL_SUBJECT = 'G-Square - Se ha creado una requisición';
export const CREATE_DECREASE_TOOL_SUBJECT = 'G-Square - Se ha realizado un movimiento de merma';
export const REMOVE_TOOL_SUBJECT = 'G-Square - Se ha eliminado un aditamento';
export const REQUEST_RESERVATION_SUBJECT = 'G-Square - Solicitud de apartado de bodega';
export const RESERVATION_SUCCESS_SUBJECT = 'G-Square - Tu bodega ha sido apartada';

export const REMINDER_SUBJECT = {
  CHECKOUT: 'G-Square -  Último día para hacer checkout de bodega',
  DEBT_NEXT_DATE: 'G-Square -  Pago de adeudo próximo',
  DEBT: 'G-Square -  Aviso de adeudo',
  FIRST_PAYMENT_FAIL: 'G-Square -  Hubo un problema con tu pago',
  SECOND_PAYMENT_FAIL: 'G-Square -  Segundo intento de cobro fallido',
  RELASED_WAREHOUSE: 'G-Square -  Bodega liberada',
  DEBT_ULTIMATE_DAY: 'G-Square -  Aviso de adeudo',
};

export const STATUS_ACTIVE = 'active';
export const STATUS_INACTIVE = 'inactive';

type StatusSpanish = {
  [key: string]: string;
};

export const STATUS = [STATUS_ACTIVE, STATUS_INACTIVE];
export const STATUS_SPANISH: StatusSpanish = {
  [STATUS_ACTIVE]: 'Activo',
  [STATUS_INACTIVE]: 'Inactivo',
};

export const { IS_DEV_MODE, FUNCTIONS_API_KEY } = process.env;
export const LOCATE_ES_MX = 'es-mx';
export const GOOGLE_MAPS_URL = 'https://maps.google.com/?q=';
export const DEFAULT_TIME_ZONE = 'America/Mexico_City';
export const {
  REDIS_HOST,
  REDIS_PORT,
  GCP_EXPIRE_SIGN_TIME,
  GGI_RFC,
  GGI_FISCAL_NAME,
  GGI_FISCAL_ADDRESS,
  BILLING_EMAIL,
  LOCATION_MAP,
  LEGAL_NOTICE_PRIVACY,
  LEGAL_RULES_PROCEDURE,
  LEGAL_TERMS_CONDITIONS,
  GOOGLE_MAPS,
  GOOGLE_MAPS_KEY,
  AVR_URL,
  AVR_CLIENT_URL,
  EMAIL_API_KEY,
  EMAIL_DOMAIN,
  EMAIL_USER_NAME,
  EMAIL_NO_REPLAY,
  GSQUARE_TEAM_EMAIL,
  LINK_WEB,
  NODE_ENV,
} = process.env as EnvVars;
export const DONT_APPLY = 'N/A';
export const LOG_CODES_NOT_ALLOWED = ['client_alerts_not_found'];
