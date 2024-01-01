public class OTPJAVA {
    public static void main(String[] args) {
        while (true) {
            double d = Math.random() * 4000;
            // System.out.println(d);
            int o = (int) d;
            if (("" + o).length() == 4) {
                System.out.println(o);
                break;
            } else
                continue;
        }
    }
}