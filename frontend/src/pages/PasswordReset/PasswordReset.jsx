import { RestorePassword } from "../../components/RestorePassword"
import {AuthLayout } from "../../components/AuthLayout"

function PasswordReset() {
    return(
        <AuthLayout>
            <RestorePassword/>
        </AuthLayout>
    )
}

export default PasswordReset;