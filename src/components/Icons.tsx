import {
  Menu,
  X,
  Home,
  Stethoscope,
  Calendar,
  FileText,
  User,
  LogOut,
  Settings,
  HelpCircle,
  Pill,
  Heart,
  Activity,
  Bell,
  Search,
  ChevronDown,
  ChevronRight,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  ArrowLeft,
  Download,
  Printer,
  ClipboardList,
  Users,
  Building,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Save,
  Send,
  RefreshCw,
  Filter,
  SortAsc,
  SortDesc,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type IconProps = {
  className?: string;
  size?: number | string;
};

const createIcon = (IconComponent: LucideIcon) => {
  return ({ className = "", size = 24 }: IconProps) => (
    <IconComponent className={className} size={size} />
  );
};

export const IconMenu = createIcon(Menu);
export const IconClose = createIcon(X);
export const IconHome = createIcon(Home);
export const IconStethoscope = createIcon(Stethoscope);
export const IconCalendar = createIcon(Calendar);
export const IconFileText = createIcon(FileText);
export const IconUser = createIcon(User);
export const IconLogOut = createIcon(LogOut);
export const IconSettings = createIcon(Settings);
export const IconHelp = createIcon(HelpCircle);
export const IconPill = createIcon(Pill);
export const IconHeart = createIcon(Heart);
export const IconActivity = createIcon(Activity);
export const IconBell = createIcon(Bell);
export const IconSearch = createIcon(Search);
export const IconChevronDown = createIcon(ChevronDown);
export const IconChevronRight = createIcon(ChevronRight);
export const IconPlus = createIcon(Plus);
export const IconEdit = createIcon(Edit);
export const IconTrash = createIcon(Trash2);
export const IconEye = createIcon(Eye);
export const IconEyeOff = createIcon(EyeOff);
export const IconArrowLeft = createIcon(ArrowLeft);
export const IconDownload = createIcon(Download);
export const IconPrinter = createIcon(Printer);
export const IconClipboardList = createIcon(ClipboardList);
export const IconUsers = createIcon(Users);
export const IconBuilding = createIcon(Building);
export const IconPhone = createIcon(Phone);
export const IconMail = createIcon(Mail);
export const IconMapPin = createIcon(MapPin);
export const IconClock = createIcon(Clock);
export const IconCheck = createIcon(CheckCircle);
export const IconError = createIcon(XCircle);
export const IconWarning = createIcon(AlertCircle);
export const IconInfo = createIcon(Info);
export const IconSave = createIcon(Save);
export const IconSend = createIcon(Send);
export const IconRefresh = createIcon(RefreshCw);
export const IconFilter = createIcon(Filter);
export const IconSortAsc = createIcon(SortAsc);
export const IconSortDesc = createIcon(SortDesc);