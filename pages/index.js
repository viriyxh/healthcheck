import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Container from "../components/Container"
import Layout from "../components/Layout"
import Card from "../components/Card"
import Form from "../components/Form"
import Input from "../components/Input"
import InputRadio from "../components/InputRadio"
import Button from "../components/Button"

const App = ({ page, updatePage, formData, updateFormData }) => {
  const router = useRouter()

  let lang = {
    name: router.locale === "th" ? "ชื่อ" : "Name",
    surname: router.locale === "th" ? "นามสกุล" : "Surname",
    sex: router.locale === "th" ? "เพศสภาพ" : "Sex",
    male: router.locale === "th" ? "ชาย" : "Male",
    female: router.locale === "th" ? "หญิง" : "Female",
    save: router.locale === "th" ? "บันทึก" : "Save",
    next: router.locale === "th" ? "ต่อไป" : "Next",
    success: router.locale === "th" ? "เสร็จสิ้น" : "Done",
  }

  console.log(formData)

  switch (page) {
    case 1:
      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card>
                <Form>
                  <Input
                    label={lang.name}
                    type="text"
                    id="name"
                    onChangeHandler={(value) => {
                      updateFormData({ name: value })
                    }}
                  />
                  <Input
                    label={lang.surname}
                    type="text"
                    id="surname"
                    onChangeHandler={(value) => {
                      updateFormData({ surname: value })
                    }}
                  />
                  <InputRadio
                    label={lang.sex}
                    items={[
                      { id: "sex1", label: lang.male, value: "male" },
                      { id: "sex2", label: lang.female, value: "female" },
                    ]}
                    name="sex"
                    onChangeHandler={(value) => {
                      updateFormData({ sex: value })
                    }}
                  />
                </Form>
              </Card>
              <Button
                onClick={() => {
                  updatePage(page + 1)
                }}
                message={lang.save}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    default:
      return (
        <Container>
          <Header />
          <Layout>
            <Card>
              <button
                onClick={() => {
                  router.push("/", "/", { locale: "th" })
                  updatePage(1)
                }}
              >
                ภาษาไทย
              </button>
              <button
                onClick={() => {
                  router.push("/", "/", { locale: "en" })
                  updatePage(1)
                }}
              >
                English
              </button>
            </Card>
          </Layout>
          <Footer />
        </Container>
      )
  }
}

export default App
