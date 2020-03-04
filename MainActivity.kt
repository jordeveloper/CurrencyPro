package com.repoai.currencypro


import android.content.Intent
import android.graphics.Color
import android.os.Bundle
import android.util.Log.e
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.backendless.Backendless
import com.backendless.BackendlessUser
import com.backendless.async.callback.AsyncCallback
import com.backendless.exceptions.BackendlessFault
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity(), View.OnClickListener {
    val APPLICATION_ID = "33F7F4E3-6146-C145-FF34-8E85BF092500"
    val API_KEY = "8A25E37D-861A-42E9-992A-8F16BB701B5D"
    val SERVER_URL = "https://api.backendless.com"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        setPointer()
    }

    private fun setPointer() {
        Backendless.initApp(applicationContext, APPLICATION_ID, API_KEY)

        e("reg","sep",null)

        this.login_btnRegiser.setOnClickListener(this)

        this.login_btnGuest.setOnClickListener(this)

        login_userName.setTextColor(Color.BLACK)

        login_pass.setTextColor(Color.BLACK)

        this.login_btnRegiser.setOnClickListener(this)

        login_btnLogin.setOnClickListener{

            var userName = login_userName
            var userPass = login_pass

            var uN = userName.getText().toString()
            var uP = userPass.getText().toString()

            Backendless.UserService.login(uN, uP, object : AsyncCallback<BackendlessUser?> {
                override fun handleResponse(response: BackendlessUser?) {
                    val intent = Intent(applicationContext, HomeActivity::class.java)
                    intent.putExtra("userName", uN)
                    startActivity(intent)
                }

                override fun handleFault(fault: BackendlessFault) {
                    Toast.makeText(applicationContext, fault.message, Toast.LENGTH_SHORT).show()
                }
            }, true)
        }
    }

    override fun onClick(view: View) {
        when(view.id){
            R.id.login_btnRegiser -> {
                intent = Intent(applicationContext,RegisterActivity::class.java)
                startActivity(intent)
            }
            R.id.login_btnGuest -> {
                intent = Intent(applicationContext,HomeActivity::class.java)
                intent.putExtra("guest","guest")
                startActivity(intent)
            }
        }
    }
}




