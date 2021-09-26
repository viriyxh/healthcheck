import { useRouter } from "next/router"
import useTranslation from "next-translate/useTranslation"
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

  let { t } = useTranslation("common")

  console.log(formData)

  switch (page) {
    case 1:
      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card color="var(--color-pink)">
                <Form>
                  <Input
                    label={t("name")}
                    type="text"
                    id="name"
                    color="var(--color-pink)"
                    onChangeHandler={(value) => {
                      updateFormData({ name: value })
                    }}
                  />
                  <InputRadio
                    label={t("sex")}
                    items={[
                      { id: "sex1", label: t("sex_male"), value: "male" },
                      { id: "sex2", label: t("sex_female"), value: "female" },
                    ]}
                    name="sex"
                    onChangeHandler={(value) => {
                      updateFormData({ sex: value })
                    }}
                  />
                  <Input
                    label={t("age")}
                    type="number"
                    id="age"
                    color="var(--color-pink)"
                    onChangeHandler={(value) => {
                      updateFormData({ age: value })
                    }}
                  />
                  <InputRadio
                    label={t("congenital")}
                    items={[
                      {
                        id: "congenital1",
                        label: t("congenital_opt1"),
                        value: "โรคอ้วนลงพุง",
                      },
                      {
                        id: "congenital2",
                        label: t("congenital_opt2"),
                        value: "โรคเครียด",
                      },
                      {
                        id: "congenital3",
                        label: t("congenital_opt3"),
                        value: "โรคความดัน",
                      },
                      {
                        id: "congenital4",
                        label: t("congenital_opt4"),
                        value: "โรคเบาหวาน",
                      },
                      {
                        id: "congenital5",
                        label: t("congenital_opt5"),
                        value: "โรคหลอดเลือดสมองและหัวใจ",
                      },
                    ]}
                    name="congenital"
                    onChangeHandler={(value) => {
                      updateFormData({ congenital: value })
                    }}
                  />
                  <Input
                    label={t("exercise")}
                    type="text"
                    id="exercise"
                    color="var(--color-pink)"
                    onChangeHandler={(value) => {
                      updateFormData({ exercise: value })
                    }}
                  />
                  <InputRadio
                    label=""
                    items={[
                      {
                        id: "symptom1",
                        label: t("smoking"),
                        value: "สูบบุหรี่",
                      },
                      {
                        id: "symptom2",
                        label: t("alcohol_abuse"),
                        value: "ดื่มสุรา",
                      },
                    ]}
                    name="symptom"
                    onChangeHandler={(value) => {
                      updateFormData({ symptom: value })
                    }}
                  />
                </Form>
              </Card>
              <Button
                color="var(--color-pink)"
                onClick={() => {
                  updatePage(page + 1)
                }}
                message={t("save")}
              />
            </div>
          </Layout>
          <Footer />
        </Container>
      )
    case 2:
      return (
        <Container>
          <Header />
          <Layout>
            <div className="cardWrapper">
              <Card>
                <Form></Form>
              </Card>
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
            <Card color="var(--color-pink)">
              <div className="pb-3">
                <button
                  className="w-100"
                  color="var(--color-pink)"
                  onClick={() => {
                    router.push("/", "/", { locale: "th" })
                    updatePage(1)
                  }}
                >
                  ภาษาไทย
                </button>
              </div>
              <div>
                <button
                  className="w-100"
                  color="var(--color-pink)"
                  onClick={() => {
                    router.push("/", "/", { locale: "en" })
                    updatePage(1)
                  }}
                >
                  English
                </button>
              </div>
            </Card>
          </Layout>
          <Footer />
        </Container>
      )
  }
}

export default App
