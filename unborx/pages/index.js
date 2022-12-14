import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Formik } from 'formik';
import * as Yup from "yup";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unborx Waitlist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Power your logistics with Unborx
        </h1>

        <p className={styles.description}>
         Unborx helps small business find warehouses and couriers

        </p>

        
        <div className={styles.mainform}>
     
     <Formik
      initialValues={{ email: "" }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block", color: "#fff" }}>
              Email
            </label>
            <div className={styles.formcontrl}>
            <div className={styles.inputform}>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? styles.error
                  : styles.input
              }
            />
            {errors.email && touched.email && (
              <div className={styles.feedback}>{errors.email}</div>
            )}
            </div>
            <div className={styles.submit}>
            <button  type="submit" disabled={isSubmitting}>
              Submit
            </button>
            </div>
            </div>
          </form>
        );
      }}
    </Formik>
   </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
